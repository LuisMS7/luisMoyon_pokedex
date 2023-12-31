import { create } from "zustand";
import { Filters } from "@filters/types/filters.type";

type State = {
	pokemonName: string;
	setPokemonName: (pokemonName: string) => void;
	filters: Filters;
	filterPokemons: () => void;
	clear: () => void;
};

export const useFiltersStore = create<State>((set, get) => ({
	pokemonName: "",
	setPokemonName: (pokemonName: string) => {
		set({
			pokemonName: pokemonName.toLowerCase().trim(),
		});
	},
	filters: { pokemonName: "" },
	filterPokemons: () => {
		set({
			filters: { pokemonName: get().pokemonName },
		});
	},
	clear: () => {
		set({
			pokemonName: "",
			filters: { pokemonName: "" },
		});
	},
}));
