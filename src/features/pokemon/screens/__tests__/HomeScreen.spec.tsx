import "react-native";
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react-native";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import {
	mockGetOnFailure,
	mockGetOnSuccess,
} from "@utils/test-utils/axios-mock";
import { API_ENDPOINTS } from "@lib/constants";
import HomeScreen from "@pokemon/screens/HomeScreen";
import { usePokemonStore } from "@pokemon/store/pokemon-slice";
import { NavigationContainer } from "@react-navigation/native";
import { useSnackbar } from "@hooks/useSnackbar";

jest.mock("@pokemon/store/pokemon-slice", () => ({
	usePokemonStore: jest.fn(),
}));

jest.mock("react-native-safe-area-context", () => ({
	useSafeAreaInsets: jest.fn(() => ({
		top: 20,
	})),
}));

jest.mock("@hooks/useSnackbar", () => ({
	useSnackbar: jest.fn().mockImplementation(() => ({
		showSnackbar: jest.fn(),
	})),
}));

describe("HomeScreen", () => {
	it("should render correctly", async () => {
		const mockPokemons: PokemonListItemApiResponse[] = [
			{
				name: "mockPokemon1",
				url: "",
			},
		];
		(usePokemonStore as unknown as jest.Mock).mockImplementation(
			(selector) =>
				selector({
					pokemons: mockPokemons,
					updatePokemons: jest.fn(),
					setPokemons: jest.fn(),
					clearPokemons: jest.fn(),
				}),
		);

		const mockPokemon = {
			id: 1,
			name: "mockPokemon1",
			sprites: {
				other: {
					dream_world: {
						front_default:
							// eslint-disable-next-line max-len
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
					},
				},
			},
			types: [
				{
					type: {
						name: "grass",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
			],
			weight: 0,
			moves: [],
		};
		mockGetOnSuccess(API_ENDPOINTS.all_pokemons, mockPokemons);
		mockGetOnSuccess(
			API_ENDPOINTS.pokemons_by_name.replace(
				"{pokemon_name}",
				"mockPokemon1",
			),
			mockPokemon,
		);
		const { rerender } = render(<HomeScreen />, {
			wrapper: NavigationContainer,
		});
		await Promise.resolve();
		await rerender(<HomeScreen />);
		expect(screen.toJSON()).toMatchSnapshot();
	});

	it("should show toast if pokemon does not exist", async () => {
		const mockUseSnackBar = jest.fn();
		(useSnackbar as unknown as jest.Mock).mockImplementation(() => ({
			showSnackbar: mockUseSnackBar,
		}));
		mockGetOnSuccess(API_ENDPOINTS.all_pokemons, []);
		mockGetOnFailure(
			API_ENDPOINTS.pokemons_by_name.replace("{pokemon_name}", "pikachu"),
			404,
		);
		(usePokemonStore as unknown as jest.Mock).mockImplementation(
			(selector) =>
				selector({
					pokemons: [],
					updatePokemons: jest.fn(),
					setPokemons: jest.fn(),
					clearPokemons: jest.fn(),
				}),
		);
		const { getByTestId, getByText } = render(<HomeScreen />, {
			wrapper: NavigationContainer,
		});

		const textInput = getByTestId("pokemon-name-text-input");
		const filterButton = getByText("Filter");
		await act(() => {
			fireEvent.changeText(textInput, "pikachu");
			fireEvent.press(filterButton);
		});
		expect(mockUseSnackBar).toHaveBeenCalledWith("Pokemon does not exist");
	});
});
