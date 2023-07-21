import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "react-native-screens/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Pokemon } from "@pokemon/types/pokemon.type";

export type PokemonNavigatorStackParamList = {
	HomeScreen: undefined;
	PokemonDetailsScreen: { pokemon: Pokemon };
};

export type PokemonNavigationProps<
	T extends keyof PokemonNavigatorStackParamList,
> = NativeStackScreenProps<PokemonNavigatorStackParamList, T>;

export type PokemonNavigationType<
	T extends keyof PokemonNavigatorStackParamList,
> = NativeStackNavigationProp<PokemonNavigatorStackParamList, T>;

export type PokemonRouteType<T extends keyof PokemonNavigatorStackParamList> =
	RouteProp<PokemonNavigatorStackParamList, T>;
