import {MovieData} from '../../../../api/movies/types.ts';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../../constants/colors.ts';
import {rem} from 'rn-units';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../../navigation/types.ts';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const windowWidth = Dimensions.get('window').width;

type MovieTileProps = {
  movieData: MovieData;
};

const BORDER_RADIUS = rem(16);
const IMAGE_ASPECT_RATIO = 0.673289183222958;
const PADDING_HORIZONTAL = rem(16);
const FONT_SIZE = rem(17);

export function MovieTileLoader() {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          alignItems="center"
          flexDirection="row"
          width={windowWidth - PADDING_HORIZONTAL * 2}>
          <SkeletonPlaceholder.Item
            borderRadius={BORDER_RADIUS}
            width={'30%'}
            aspectRatio={IMAGE_ASPECT_RATIO}
          />
          <SkeletonPlaceholder.Item
            borderRadius={BORDER_RADIUS}
            marginStart={rem(12)}
            flex={1}
            height={FONT_SIZE * 2}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
}

export function MovieTile({movieData}: MovieTileProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const name = movieData.aka || movieData.title;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('DetailsScreen', {id: movieData.id, name})
      }>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: movieData.poster?.url}}
          height={movieData.poster?.height}
          width={movieData.poster?.width}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rem(8),
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  image: {
    width: '30%',
    aspectRatio: IMAGE_ASPECT_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    backgroundColor: COLORS.placeholder,
    borderRadius: rem(16),
  },
  text: {
    paddingStart: rem(12),
    color: COLORS.text,
    fontSize: FONT_SIZE,
    fontWeight: '700',
    flex: 1,
  },
});
