import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/colors.ts';
import {rem} from 'rn-units';
import React from 'react';

type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({title}: SectionHeaderProps) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.text,
    fontSize: rem(19),
    fontWeight: '700',
  },
});
