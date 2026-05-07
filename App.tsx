import React from 'react';
import { View } from 'react-native';

import AppNav from './src/navigations';

import rootSaga from './src/app/sagas';
import configureStore from './src/app/reducers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import alertConfig from './src/components/alertMsg/config';

const { store, persistor, runSaga } = configureStore();
runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <AppNav />

        <Toast config={alertConfig} />

        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;