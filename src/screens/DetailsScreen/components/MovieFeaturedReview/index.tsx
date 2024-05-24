import {StyleSheet, Text, View} from 'react-native';
import {DEFAULT_OFFSET} from '../../../constants.ts';
import {MovieDetailsData} from '../../../../api/movies/types.ts';
import React from 'react';
import {SectionHeader} from '../../../../components/SectionHeader';
import {isIOS, rem} from 'rn-units';
import {COLORS} from '../../../../constants/colors.ts';

type Props = {
  moviesDetails: MovieDetailsData;
};

export function MovieFeaturedReview({moviesDetails}: Props) {
  if (!moviesDetails.featuredReview) {
    return null;
  }
  return (
    <View style={styles.container}>
      <SectionHeader title={'Featured Review'} />
      <View style={[styles.reviewContainer, styles.shadow]}>
        {moviesDetails.featuredReview.rating ? (
          <Text
            style={
              styles.rating
            }>{`${moviesDetails.featuredReview.rating.ratingValue} / ${moviesDetails.featuredReview.rating.bestRating}`}</Text>
        ) : null}
        <Text style={styles.title}>{moviesDetails.featuredReview.title}</Text>
        <Text style={styles.description}>
          {moviesDetails.featuredReview.description}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.author}>
            {moviesDetails.featuredReview.author}
          </Text>
          {moviesDetails.featuredReview.dateCreated ? (
            <Text style={styles.dateCreated}>
              {new Date(
                moviesDetails.featuredReview.dateCreated,
              ).toDateString()}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const BORDER_RADIUS = rem(8);
const PADDING = rem(12);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: DEFAULT_OFFSET * 2,
    paddingHorizontal: DEFAULT_OFFSET,
  },
  reviewContainer: {
    marginTop: PADDING,
    padding: PADDING,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.background,
  },
  shadow: isIOS
    ? {
        shadowColor: COLORS.text,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 6,
        shadowOpacity: 0.15,
      }
    : {elevation: 4},
  infoContainer: {
    flexDirection: 'column',
  },
  rating: {
    color: COLORS.textSecondary,
    fontSize: rem(17),
    fontWeight: '400',
  },
  author: {
    paddingTop: PADDING,
    color: COLORS.text,
    fontSize: rem(16),
    fontWeight: '500',
  },
  dateCreated: {
    paddingTop: rem(4),
    color: COLORS.textSecondary,
    fontSize: rem(14),
    fontWeight: '500',
  },
  title: {
    paddingTop: PADDING,
    color: COLORS.text,
    fontSize: rem(17),
    fontWeight: '700',
  },
  description: {
    paddingTop: rem(8),
    color: COLORS.textSecondary,
    fontSize: rem(15),
    lineHeight: rem(22),
    fontWeight: '400',
  },
});
