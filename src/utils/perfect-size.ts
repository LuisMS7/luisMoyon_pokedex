import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width);

const create = (designSize: { width: number; height: number }) => {
	if (
		!designSize ||
		!designSize.width ||
		!designSize.height ||
		typeof designSize.width !== "number" ||
		typeof designSize.height !== "number"
	) {
		throw new Error("Invalid design size object!");
	}
	const DESIGN_RESOLUTION = Math.sqrt(
		designSize.height * designSize.height +
			designSize.width * designSize.width,
	);
	const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;
	return (size: number) => RESOLUTIONS_PROPORTION * size;
};

const FIGMA_WIDTH = 430;
const FIGMA_HEIGHT = 932;

export const perfectSize = create({ width: FIGMA_WIDTH, height: FIGMA_HEIGHT });
