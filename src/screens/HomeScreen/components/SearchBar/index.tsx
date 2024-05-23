import {Image, StyleSheet, TextInput, View} from 'react-native';
import {rem} from 'rn-units';
import {COLORS} from '../../../../constants/colors.ts';
import React from 'react';
import {Images} from '../../../../assets/images';
import {BORDER_RADIUS, DEFAULT_OFFSET} from '../../../constants.ts';

type Props = {
  searchText: string;
  onSearchTextChange: (text: string) => void;
};

export function SearchBar({searchText, onSearchTextChange}: Props) {
  const [isFocused, setFocused] = React.useState(false);
  return (
    <View style={styles.outerContainer}>
      <View style={[styles.container, isFocused && styles.focused]}>
        <Image width={rem(24)} height={rem(24)} source={Images.icons.search} />
        <TextInput
          blurOnSubmit={true}
          clearButtonMode={'always'}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={32}
          placeholder={'Search for movies'}
          placeholderTextColor={COLORS.textSecondary}
          returnKeyType="search"
          style={[styles.input]}
          value={searchText}
          onChangeText={onSearchTextChange}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: DEFAULT_OFFSET,
    width: '100%',
    backgroundColor: COLORS.background,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    padding: rem(12),
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surface,
  },
  input: {
    paddingStart: rem(12),
    color: COLORS.text,
    fontSize: rem(17),
    lineHeight: rem(20),
    textAlignVertical: 'center',
    fontWeight: '600',
    flex: 1,
  },
  focused: {
    borderColor: COLORS.border,
  },
});
