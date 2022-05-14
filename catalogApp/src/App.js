import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Navigation from './navigation/Navigation';
import store from './store/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const persist = persistStore(store);
  return (
    <Provider {...{store}}>
      <PersistGate loading={null} persistor={persist}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
