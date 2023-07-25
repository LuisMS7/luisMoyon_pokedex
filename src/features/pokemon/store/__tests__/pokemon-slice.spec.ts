import { act, renderHook } from "@testing-library/react-hooks";
import { usePokemonStore } from "@pokemon//store/pokemon-slice";
import { PokemonApiResponse } from "@pokemon/types/pokemon-api-response.type";

describe("usePokemonStore", () => {
	afterEach(() => {
		const { result } = renderHook(() => usePokemonStore());
		const { clearPokemons } = result.current;
		act(() => {
			clearPokemons();
		});
	});

	it("should update pokemons when updatePokemons is called", () => {
		const { result } = renderHook(() => usePokemonStore());

		const { pokemons: initialPokemons, updatePokemons } = result.current;

		expect(initialPokemons.length).toBe(0);

		act(() => {
			updatePokemons([{ name: "mockPokemon1", url: "mockUrl1" }]);
		});

		const { pokemons: updatedPokemons } = result.current;

		expect(updatedPokemons.length).toBe(1);
		expect(updatedPokemons[0].name).toBe("mockPokemon1");

		act(() => {
			updatePokemons([{ name: "mockPokemon2", url: "mockUrl2" }]);
		});

		const { pokemons: finalPokemons } = result.current;

		expect(finalPokemons.length).toBe(2);
		expect(finalPokemons[0].name).toBe("mockPokemon1");
		expect(finalPokemons[1].name).toBe("mockPokemon2");
	});

	it("should set to input pokemon when setPokemon is called", () => {
		const { result } = renderHook(() => usePokemonStore());

		const { pokemons: initialPokemons, setPokemon } = result.current;

		expect(initialPokemons.length).toBe(0);

		act(() => {
			setPokemon({ name: "mockPokemon1" } as PokemonApiResponse);
		});

		const { pokemons: updatedPokemons } = result.current;

		expect(updatedPokemons.length).toBe(1);
		expect(updatedPokemons[0].name).toBe("mockPokemon1");

		act(() => {
			setPokemon({ name: "mockPokemon2" } as PokemonApiResponse);
		});

		const { pokemons: finalPokemons } = result.current;

		expect(finalPokemons.length).toBe(1);
		expect(finalPokemons[0].name).toBe("mockPokemon2");
	});

	it("should clear pokemons when clearPokemons is called", () => {
		const { result } = renderHook(() => usePokemonStore());

		const {
			pokemons: initialPokemons,
			updatePokemons,
			clearPokemons,
		} = result.current;

		expect(initialPokemons.length).toBe(0);

		act(() => {
			updatePokemons([
				{ name: "mockPokemon1", url: "mockUrl1" },
				{ name: "mockPokemon2", url: "mockUrl2" },
			]);
		});

		const { pokemons: updatedPokemons } = result.current;

		expect(updatedPokemons.length).toBe(2);
		expect(updatedPokemons[0].name).toBe("mockPokemon1");
		expect(updatedPokemons[1].name).toBe("mockPokemon2");

		act(() => {
			clearPokemons();
		});

		const { pokemons: finalPokemons } = result.current;

		expect(finalPokemons.length).toBe(0);
	});
});
