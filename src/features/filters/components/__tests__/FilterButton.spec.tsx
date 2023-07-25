import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react-native";
import FilterButton from "@filters/components/FilterButton";
import { useFiltersStore } from "@filters/store/filters-slice";

jest.mock("@filters/store/filters-slice", () => ({
	useFiltersStore: jest.fn(),
}));

describe("FilterButton", () => {
	it("should render correctly", () => {
		render(<FilterButton />);

		expect(screen.toJSON()).toMatchSnapshot();
	});

	it("should call filterPokemons when button is pressed", () => {
		const mockFilterPokemons = jest.fn();
		(useFiltersStore as unknown as jest.Mock).mockImplementation(
			(selector) => selector({ filterPokemons: mockFilterPokemons }),
		);
		const { getByText } = render(<FilterButton />);

		const filterButton = getByText("Filter");

		act(() => {
			fireEvent.press(filterButton);
		});

		expect(mockFilterPokemons).toHaveBeenCalledTimes(1);
	});
});
