import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Mind} from '../../types/mind.interface';

export type RootStackParamList = {
  Home: undefined;
  Mind: Mind;
};

export const MainStack = createNativeStackNavigator<RootStackParamList>();

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type MindScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Mind'
>;
