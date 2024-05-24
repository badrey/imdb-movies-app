import {MovieCastData, MovieDetailsData} from '../../../../api/movies/types.ts';
import {FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../constants/colors.ts';
import {SectionHeader} from '../../../../components/SectionHeader';
import {BORDER_RADIUS, DEFAULT_OFFSET} from '../../../constants.ts';
import {rem} from 'rn-units';
import React from 'react';
import {CastTile} from './CastTile';

type Props = {
  moviesDetails: MovieDetailsData;
};

export function MovieCast({moviesDetails}: Props) {
  if (!moviesDetails.cast?.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <SectionHeader title={'Cast'} />
      </View>
      <FlatList
        horizontal
        data={moviesDetails.cast}
        renderItem={({item}: {item: MovieCastData}) => (
          <CastTile castData={item} />
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.castContainer}
        contentContainerStyle={styles.castContentContainer}
      />
    </View>
  );
}

const MARGIN_HORIZONTAL = rem(5);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginTop: DEFAULT_OFFSET * 2,
  },
  paddingContainer: {
    paddingHorizontal: DEFAULT_OFFSET,
  },
  castContainer: {
    marginTop: rem(10),
  },
  castContentContainer: {
    paddingHorizontal: DEFAULT_OFFSET - MARGIN_HORIZONTAL,
  },
  keywordContainer: {
    marginHorizontal: MARGIN_HORIZONTAL,
    paddingVertical: rem(4),
    paddingHorizontal: rem(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS,
  },
  keyword: {
    color: COLORS.text,
    fontSize: rem(14),
    fontWeight: '400',
  },
});
