import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MovieData} from '../api/movies/types.ts';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {movieData: MovieData};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;
