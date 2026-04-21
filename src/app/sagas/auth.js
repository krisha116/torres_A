import { call, put, takeLatest, delay, race } from "redux-saga/effects";
import { 
  USER_LOGIN, 
  USER_LOGIN_COMPLETE, 
  USER_LOGIN_ERROR, 
  USER_LOGIN_REQUEST 
} from "../actions";
import { authLogin as userLoginApi } from "../api/auth";

export function* userLoginAsync(action) {
  console.log(' User login saga started with:', action.payload);

  try {
    yield put({ type: USER_LOGIN_REQUEST });

    // Use a 'race' to ensure the login doesn't hang forever if the network is dead
    const { data, timeout } = yield race({
      data: call(userLoginApi, action.payload),
      timeout: delay(10000) // 10-second timeout
    });

    if (timeout) {
      throw new Error("Login timed out. Check if your API server is running and accessible from your phone.");
    }

    console.log(' Login response received:', data);
    yield put({ type: USER_LOGIN_COMPLETE, payload: data });

  } catch (error) {
    console.log(' User Login saga error:', error);

    // Provide a helpful message if it's a network/connection error
    const errorMessage = error.message === "Network Error" 
      ? "Cannot connect to server. Check your IP address." 
      : (error?.response?.data?.message || error.message || 'Login failed');

    yield put({
      type: USER_LOGIN_ERROR,
      error: errorMessage,
    });
  }
}

export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}