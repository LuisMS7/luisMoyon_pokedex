import { create } from "zustand";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";

type State = {
	pokemons: PokemonListItemApiResponse[];
	updatePokemons: (pokemons: PokemonListItemApiResponse[]) => void;
	setPokemons: (pokemons: PokemonListItemApiResponse[]) => void;
	clearPokemons: () => void;
};

const usePokemonStore = create<State>((set, get) => ({
	pokemons: [],
	updatePokemons: (pokemons: PokemonListItemApiResponse[]) => {
		const currentPokemonsList = get().pokemons;
		const updatePokemonsList = [...currentPokemonsList, ...pokemons];
		set({
			pokemons: updatePokemonsList,
		});
	},
	setPokemons: (pokemons: PokemonListItemApiResponse[]) => {
		set({
			pokemons: pokemons,
		});
	},
	clearPokemons: () =>
		set({
			pokemons: [],
		}),
}));

export default usePokemonStore;
