import {MovieCastData} from '../../../../../api/movies/types.ts';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../../constants/colors.ts';
import {rem} from 'rn-units';
import React from 'react';

type Props = {
  castData: MovieCastData;
};

export const CAST_MARGIN_HORIZONTAL = rem(5);
const CAST_TILE_SIZE = rem(150);

function getImageStyle({width, height}: {width: number; height: number}) {
  if (height > width) {
    return {width: CAST_TILE_SIZE, height: CAST_TILE_SIZE * (height / width)};
  }
  return {height: CAST_TILE_SIZE, width: CAST_TILE_SIZE * (width / height)};
}

export function CastTile({castData}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {castData.primaryImage ? (
          <Image
            style={getImageStyle({
              width: castData.primaryImage.width,
              height: castData.primaryImage.height,
            })}
            source={{uri: castData.primaryImage.url}}
          />
        ) : null}
      </View>
      <Text style={styles.name}>{castData.actorName}</Text>
      <Text style={styles.character}>{castData.characterName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: CAST_MARGIN_HORIZONTAL,
    justifyContent: 'center',
    alignItems: 'center',
    width: CAST_TILE_SIZE,
  },
  imageContainer: {
    width: CAST_TILE_SIZE,
    height: CAST_TILE_SIZE,
    backgroundColor: COLORS.placeholder,
    borderRadius: CAST_TILE_SIZE / 2,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: CAST_TILE_SIZE,
    height: CAST_TILE_SIZE,
  },
  name: {
    paddingTop: rem(5),
    flex: 1,
    color: COLORS.text,
    fontSize: rem(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  character: {
    paddingTop: rem(3),
    color: COLORS.textSecondary,
    fontSize: rem(13),
    fontWeight: 'medium',
    textAlign: 'center',
    flex: 1,
  },
});
