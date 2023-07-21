import React from "react";
import {
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react-native";
import PokemonDetailsHeader from "@pokemon/components/PokemonDetailsHeader";
import { mockPokemon } from "@utils/test-utils/mocks";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: mockGoBack,
	}),
}));

describe("PokemonDetailsHeader", () => {
	it("should render correctly", () => {
		render(<PokemonDetailsHeader pokemon={mockPokemon} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});

	it("should go back when press left arrow icon", async () => {
		const { getByTestId } = render(
			<PokemonDetailsHeader pokemon={mockPokemon} />,
		);
		const leftArrowIcon = getByTestId("back-button");

		fireEvent(leftArrowIcon, "press");

		waitFor(() => expect(mockGoBack).toBeCalledTimes(1));
	});
});
