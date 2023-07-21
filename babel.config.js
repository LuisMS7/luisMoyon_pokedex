/* eslint-disable  no-undef */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["."],
					alias: {
						"@src": "./src",
						"@lib": "./src/lib",
						"@utils": "./src/utils",
						"@hooks": "./src/hooks",
						"@app-types": "./src/types",
						"@pokemon": "./src/features/pokemon",
					},
				},
			],
			["module:react-native-dotenv"],
		],
	};
};
