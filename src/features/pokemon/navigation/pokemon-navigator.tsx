import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// eslint-disable-next-line max-len
import { PokemonNavigatorStackParamList } from "@pokemon/types/pokemon-navigator.type";
import HomeScreen from "@pokemon/screens/HomeScreen";

const Stack = createStackNavigator<PokemonNavigatorStackParamList>();

const PokemonNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default PokemonNavigator;
