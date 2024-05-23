import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {rem} from 'rn-units';
import {COLORS} from '../../../../constants/colors.ts';

type Props = {
  searchText: string;
};

export function EmptyState({searchText}: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.text
        }>{`No movies found for your search query: ${searchText}.\n\nPlease try a different keyword.`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.textSecondary,
    fontSize: rem(17),
    fontWeight: '500',
    textAlign: 'center',
  },
});
