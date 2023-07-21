import "react-native";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import PokemonList from "@pokemon/components/PokemonList";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import { mockGetOnSuccess } from "@utils/test-utils/axios-mock";
import { API_ENDPOINTS } from "@lib/constants";

describe("PokemonCard", () => {
	it("should render correctly", async () => {
		const mockPokemons: PokemonListItemApiResponse[] = [
			{
				name: "mockPokemon1",
				url: "",
			},
			{
				name: "mockPokemon2",
				url: "",
			},
			{
				name: "mockPokemon3",
				url: "",
			},
		];
		const firstMockPokemon = {
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
		const secondMockPokemon = {
			id: 2,
			name: "mockPokemon2",
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
						name: "water",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
			],
			weight: 0,
			moves: [],
		};
		const thirdMockPokemon = {
			id: 3,
			name: "mockPokemon3",
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
						name: "fire",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
			],
			weight: 0,
			moves: [],
		};
		mockGetOnSuccess(
			API_ENDPOINTS.pokemons_by_name.replace(
				"{pokemon_name}",
				"mockPokemon1",
			),
			firstMockPokemon,
		);
		mockGetOnSuccess(
			API_ENDPOINTS.pokemons_by_name.replace(
				"{pokemon_name}",
				"mockPokemon2",
			),
			secondMockPokemon,
		);
		mockGetOnSuccess(
			API_ENDPOINTS.pokemons_by_name.replace(
				"{pokemon_name}",
				"mockPokemon3",
			),
			thirdMockPokemon,
		);
		const { rerender } = render(
			<PokemonList pokemonsItems={mockPokemons} />,
		);
		await Promise.resolve();
		await rerender(<PokemonList pokemonsItems={mockPokemons} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
