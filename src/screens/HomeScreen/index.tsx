import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants/colors.ts';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {MoviesSearchActions} from '../../store/modules/MoviesSearch/actions';
import {
  moviesSearchIsLoadingSelector,
  moviesSearchResultSelector,
} from '../../store/modules/MoviesSearch/selectors';

export function HomeScreen() {
  const searchResults = useSelector(moviesSearchResultSelector);
  const isLoading = useSelector(moviesSearchIsLoadingSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MoviesSearchActions.SEARCH_MOVIES.START.create({searchValue: 'mission'}),
    );
  }, [dispatch]);

  console.log({isLoading, searchResults});

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('DetailsScreen')}>
        <Text style={styles.text}>Go To Details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  text: {
    color: COLORS.text,
  },
});
