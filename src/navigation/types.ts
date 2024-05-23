import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {id: string; name: string};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;
