import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';
import { Provider } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { RootNavigator } from '@navigators';
import store from '@stores';
import '@types/action-sheets';

function App() {
  useEffect(() => {
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SheetProvider>
          <RootNavigator />
        </SheetProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
