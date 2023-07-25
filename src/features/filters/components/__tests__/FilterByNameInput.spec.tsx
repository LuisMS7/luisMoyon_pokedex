import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react-native";
import FilterByNameInput from "@filters/components/FilterByNameInput";
import { useFiltersStore } from "@filters/store/filters-slice";

jest.mock("@filters/store/filters-slice", () => ({
	useFiltersStore: jest.fn(),
}));

describe("FilterByNameInput", () => {
	it("should render correctly", () => {
		(useFiltersStore as unknown as jest.Mock).mockImplementation(
			(selector) =>
				selector({ pokemonName: "", setPokemonName: jest.fn() }),
		);
		render(<FilterByNameInput />);

		expect(screen.toJSON()).toMatchSnapshot();
	});

	it("should call setPokemonName when user edit text input", () => {
		const mockSetPokemonName = jest.fn();
		(useFiltersStore as unknown as jest.Mock).mockImplementation(
			(selector) =>
				selector({
					pokemonName: "",
					setPokemonName: mockSetPokemonName,
				}),
		);
		const { getByTestId } = render(<FilterByNameInput />);

		const textInput = getByTestId("pokemon-name-text-input");

		act(() => {
			fireEvent.changeText(textInput, "pikachu");
		});

		expect(mockSetPokemonName).toHaveBeenCalledWith("pikachu");
	});

	it("should use pokemonName of store in text input", () => {
		(useFiltersStore as unknown as jest.Mock).mockImplementation(
			(selector) =>
				selector({
					pokemonName: "mockPokemon",
					setPokemonName: jest.fn(),
				}),
		);
		const { getByTestId } = render(<FilterByNameInput />);

		const textInput = getByTestId("pokemon-name-text-input");

		expect(textInput.props.value).toBe("mockPokemon");
	});
});
