import { Pokemon } from "@pokemon/types/pokemon.type";

export const mockPokemon: Pokemon = {
	id: 1,
	name: "mockPokemonName",
	// eslint-disable-next-line max-len
	img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	types: [{ type: { name: "normal", url: "" }, slot: 1 }],
	weight: 10,
	sprites: {
		back_default:
			// eslint-disable-next-line max-len
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		back_female: "",
		back_shiny: "",
		back_shiny_female: "",
		front_default: "",
		front_female: "",
		front_shiny: "",
		front_shiny_female: "",
	},
	moves: [{ move: { name: "normal", url: "" }, version_group_details: [] }],
};
