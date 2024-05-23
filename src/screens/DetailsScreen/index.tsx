import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/colors.ts';
import React from 'react';

export function DetailsScreen() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
