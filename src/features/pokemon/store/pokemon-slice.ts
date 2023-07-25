import { create } from "zustand";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import { PokemonApiResponse } from "@pokemon/types/pokemon-api-response.type";

type State = {
	pokemons: PokemonListItemApiResponse[];
	updatePokemons: (pokemons: PokemonListItemApiResponse[]) => void;
	setPokemon: (pokemon: PokemonApiResponse) => void;
	clearPokemons: () => void;
};

export const usePokemonStore = create<State>((set, get) => ({
	pokemons: [],
	updatePokemons: (pokemons: PokemonListItemApiResponse[]) => {
		const currentPokemonsList = get().pokemons;
		const updatePokemonsList = [...currentPokemonsList, ...pokemons];
		set({
			pokemons: updatePokemonsList,
		});
	},
	setPokemon: (pokemon: PokemonApiResponse) => {
		set({
			pokemons: [
				{
					name: pokemon.name,
					url: "",
				},
			],
		});
	},
	clearPokemons: () =>
		set({
			pokemons: [],
		}),
}));
