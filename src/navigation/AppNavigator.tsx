import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigatorStackParamList } from "@app-types/app-navigator.type";
import PokemonNavigator from "@pokemon/navigation/pokemon-navigator";

const Stack = createStackNavigator<AppNavigatorStackParamList>();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="MainStack" component={PokemonNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
