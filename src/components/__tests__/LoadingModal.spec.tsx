import React from "react";
import { render, screen } from "@testing-library/react-native";
import LoadingModal from "@src/components/LoadingModal";

describe("LoadingModal", () => {
	it("should render when visible is true", () => {
		render(<LoadingModal visible={true} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
	it("should not render when visible is false", () => {
		render(<LoadingModal visible={false} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
