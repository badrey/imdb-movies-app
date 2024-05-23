import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors.ts';
import {StyleSheet} from 'react-native';
import {Router} from '../../navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../../store/configureStore.ts';

export function RootView() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView edges={['top']} style={styles.container}>
            <Router />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
