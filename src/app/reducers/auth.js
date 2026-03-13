import { RESET_LOGIN_USER,
   USER_LOGIN,
   USER_LOGIN_COMPLETE,
   USER_LOGIN_ERROR, 
   USER_LOGIN_REQUEST } 
   from "../actions";


const INITIALSTATE = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,          // store the error message from the saga
};

export default function reducer (state = INITIALSTATE, action){
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      // request started, set loading and clear previous error
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
        error: null,
      };

    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        data: action.payload || null,
        isLoading: false,
        isError: false,
        error: null,
      };

    case USER_LOGIN_ERROR:
      // login failed; store error message so UI can react
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        error: action.error || 'Login failed',
      };

    case RESET_LOGIN_USER:
      return INITIALSTATE;

    default:
      return state;

  }

}

export const authLogin = payload => ({
  type: USER_LOGIN,
  payload,
});

  