import { act, renderHook } from "@testing-library/react-hooks";
import { useFiltersStore } from "@filters/store/filters-slice";

describe("useFiltersStore", () => {
	afterEach(() => {
		const { result } = renderHook(() => useFiltersStore());
		const { clear } = result.current;
		act(() => {
			clear();
		});
	});

	it.each([
		["mockPokemonName", "mockpokemonname"],
		["MOCKPOKEMONNAME", "mockpokemonname"],
		["mockpokemonname ", "mockpokemonname"],
		["MOCKPOKEMONNAME ", "mockpokemonname"],
	])(
		"should change pokemonName when setPokemonName is called",
		(inputPokemonName: string, expectedPokemonName: string) => {
			const { result } = renderHook(() => useFiltersStore());

			const { pokemonName: initialPokemonName, setPokemonName } =
				result.current;

			expect(initialPokemonName).toBe("");

			act(() => {
				setPokemonName(inputPokemonName);
			});

			const { pokemonName: currentPokemonName } = result.current;

			expect(currentPokemonName).toBe(expectedPokemonName);
		},
	);

	it("should change filters when filterPokemons is called", () => {
		const mockPokemonName = "pikachu";
		const { result } = renderHook(() => useFiltersStore());

		const {
			pokemonName: initialPokemonName,
			filters: initialFilters,
			setPokemonName,
			filterPokemons,
		} = result.current;

		expect(initialPokemonName).toBe("");
		expect(initialFilters.pokemonName).toBe("");

		act(() => {
			setPokemonName(mockPokemonName);
			filterPokemons();
		});

		const { pokemonName: currentPokemonName, filters: currentFilters } =
			result.current;

		expect(currentPokemonName).toBe(mockPokemonName);
		expect(currentFilters.pokemonName).toBe(mockPokemonName);
	});

	it("should clear store when clear is called", () => {
		const mockPokemonName = "pikachu";
		const { result } = renderHook(() => useFiltersStore());

		const {
			pokemonName: initialPokemonName,
			filters: initialFilters,
			setPokemonName,
			filterPokemons,
			clear,
		} = result.current;

		expect(initialPokemonName).toBe("");
		expect(initialFilters.pokemonName).toBe("");

		act(() => {
			setPokemonName(mockPokemonName);
			filterPokemons();
		});

		const { pokemonName: updatedPokemonName, filters: updatedFilters } =
			result.current;

		expect(updatedPokemonName).toBe(mockPokemonName);
		expect(updatedFilters.pokemonName).toBe(mockPokemonName);

		act(() => {
			clear();
		});

		const { pokemonName: clearedPokemonName, filters: clearedFilters } =
			result.current;

		expect(clearedPokemonName).toBe("");
		expect(clearedFilters.pokemonName).toBe("");
	});
});
