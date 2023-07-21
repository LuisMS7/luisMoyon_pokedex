import React from "react";
import { render, screen } from "@testing-library/react-native";
import { mockPokemon } from "@utils/test-utils/mocks";
import PokemonDetailsScreen from "@pokemon/screens/PokemonDetailsScreen";
import {
	PokemonNavigationProps,
	PokemonNavigationType,
	PokemonRouteType,
} from "@pokemon/types/pokemon-navigator.type";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("react-native-safe-area-context", () => ({
	useSafeAreaInsets: jest.fn(() => ({
		top: 20,
	})),
}));

const createTestProps = (): unknown &
	PokemonNavigationProps<"PokemonDetailsScreen"> => ({
	navigation:
		jest.fn() as unknown as PokemonNavigationType<"PokemonDetailsScreen">,
	route: {
		params: { pokemon: mockPokemon },
	} as unknown as PokemonRouteType<"PokemonDetailsScreen">,
});

describe("PokemonDetailsScreen", () => {
	it("should render correctly", () => {
		const props = createTestProps();
		render(<PokemonDetailsScreen {...props} />, {
			wrapper: NavigationContainer,
		});

		expect(screen.toJSON()).toMatchSnapshot();
	});
});
