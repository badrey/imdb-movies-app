import {MovieDetailsData} from '../../../../api/movies/types.ts';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../constants/colors.ts';
import {SectionHeader} from '../../../../components/SectionHeader';
import {BORDER_RADIUS, DEFAULT_OFFSET} from '../../../constants.ts';
import {rem} from 'rn-units';
import React from 'react';

type Props = {
  moviesDetails: MovieDetailsData;
};

export function MovieDescription({moviesDetails}: Props) {
  if (!moviesDetails.description) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <SectionHeader title={'Description'} />
        <Text style={styles.description}>{moviesDetails.description}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.keywordsContainer}
        contentContainerStyle={styles.keywordsContentContainer}>
        {moviesDetails.keywords.map(keyword => (
          <View key={keyword} style={styles.keywordContainer}>
            <Text style={styles.keyword}>{keyword}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const KEYWORDS_MARGIN_HORIZONTAL = rem(5);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginTop: DEFAULT_OFFSET * 2,
  },
  paddingContainer: {
    paddingHorizontal: DEFAULT_OFFSET,
  },
  description: {
    paddingTop: rem(10),
    color: COLORS.textSecondary,
    fontSize: rem(15),
    lineHeight: rem(20),
    fontWeight: 'normal',
  },
  keywordsContainer: {
    marginTop: rem(10),
  },
  keywordsContentContainer: {
    paddingHorizontal: DEFAULT_OFFSET - KEYWORDS_MARGIN_HORIZONTAL,
  },
  keywordContainer: {
    marginHorizontal: KEYWORDS_MARGIN_HORIZONTAL,
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
