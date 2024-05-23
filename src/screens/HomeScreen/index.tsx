import {Animated, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors.ts';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MoviesSearchActions} from '../../store/modules/MoviesSearch/actions';
import {
  moviesSearchIsLoadingSelector,
  moviesSearchResultSelector,
} from '../../store/modules/MoviesSearch/selectors';
import {MovieTile, MovieTileLoader} from './components/MovieTile';
import {SearchBar} from './components/SearchBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {EmptyState} from './components/EmptyState';
import ScrollView = Animated.ScrollView;

export function HomeScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const [searchText, setSearchText] = React.useState('');
  const searchResults = useSelector(moviesSearchResultSelector);
  const isLoading = useSelector(moviesSearchIsLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MoviesSearchActions.SEARCH_MOVIES.START.create({searchValue: searchText}),
    );
  }, [dispatch, searchText]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      contentContainerStyle={[
        styles.contentContainer,
        {paddingBottom: safeAreaInsets.bottom},
      ]}>
      <SearchBar
        key={'search'}
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />
      {isLoading
        ? Array.from({length: 5}).map((_, index) => (
            <MovieTileLoader key={index} />
          ))
        : searchResults.map(searchResult => (
            <MovieTile key={searchResult.id} movieData={searchResult} />
          ))}
      {!isLoading && searchResults.length === 0 && (
        <EmptyState searchText={searchText} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    flexGrow: 1,
  },
  button: {
    width: '70%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  text: {
    color: COLORS.text,
  },
});
