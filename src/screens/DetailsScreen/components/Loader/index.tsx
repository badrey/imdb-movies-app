import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, DEFAULT_OFFSET} from '../../../constants.ts';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {rem} from 'rn-units';
import {windowWidth} from '../../../HomeScreen/components/MovieTile';

export function Loader() {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={windowWidth - DEFAULT_OFFSET * 2}>
          <SkeletonPlaceholder.Item
            borderRadius={BORDER_RADIUS}
            width={'50%'}
            height={rem(24)}
          />
          <SkeletonPlaceholder.Item
            borderRadius={BORDER_RADIUS}
            marginTop={rem(10)}
            width={'100%'}
            height={rem(150)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: DEFAULT_OFFSET * 2,
    paddingHorizontal: DEFAULT_OFFSET,
  },
});
