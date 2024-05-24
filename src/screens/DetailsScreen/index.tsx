import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants/colors.ts';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types.ts';
import {rem} from 'rn-units';
import {
  BORDER_RADIUS,
  DEFAULT_OFFSET,
  MOVIE_POSTER_ASPECT_RATIO,
} from '../constants.ts';
import {
  moviesDetailsLoadingSelector,
  moviesDetailsSelector,
} from '../../store/modules/MoviesSearch/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {MoviesSearchActions} from '../../store/modules/MoviesSearch/actions';
import {MovieDescription} from './components/MovieDescription';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MovieCast} from './components/MovieCast';
import {Loader} from './components/Loader';
import {MovieFeaturedReview} from './components/MovieFeaturedReview';

export function DetailsScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailsScreen'>>();
  const {movieData} = route.params;
  console.log(movieData);

  const moviesDetails = useSelector(moviesDetailsSelector(movieData.id));
  const moviesDetailsLoading = useSelector(moviesDetailsLoadingSelector);

  const isLoading = moviesDetailsLoading && !moviesDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MoviesSearchActions.FETCH_DETAILS.START.create({id: movieData.id}),
    );
  }, [dispatch, movieData.id]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainer,
        {paddingBottom: safeAreaInsets.bottom},
      ]}>
      <View style={styles.paddingContainer}>
        <Text style={styles.text}>{movieData.aka || movieData.title}</Text>
        {movieData.poster?.url ? (
          <Image style={styles.poster} source={{uri: movieData.poster?.url}} />
        ) : null}
      </View>
      {moviesDetails ? (
        <>
          <MovieDescription moviesDetails={moviesDetails} />
          <MovieCast moviesDetails={moviesDetails} />
          <MovieFeaturedReview moviesDetails={moviesDetails} />
        </>
      ) : null}
      {isLoading ? <Loader /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingVertical: DEFAULT_OFFSET,
  },
  text: {
    color: COLORS.text,
    fontSize: rem(23),
    fontWeight: '700',
  },
  paddingContainer: {
    paddingHorizontal: DEFAULT_OFFSET,
  },
  poster: {
    marginTop: DEFAULT_OFFSET,
    width: '100%',
    aspectRatio: MOVIE_POSTER_ASPECT_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.placeholder,
  },
});
