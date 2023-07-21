import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "react-native-screens/native-stack";
import { RouteProp } from "@react-navigation/native";

export type AppNavigatorStackParamList = {
	MainStack: undefined;
};

export type AppNavigationProps<T extends keyof AppNavigatorStackParamList> =
	NativeStackScreenProps<AppNavigatorStackParamList, T>;

export type AppNavigationType<T extends keyof AppNavigatorStackParamList> =
	NativeStackNavigationProp<AppNavigatorStackParamList, T>;

export type AppRouteType<T extends keyof AppNavigatorStackParamList> =
	RouteProp<AppNavigatorStackParamList, T>;
