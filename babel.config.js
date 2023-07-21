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
						"@assets": "./src/assets",
						"@lib": "./src/lib",
						"@utils": "./src/utils",
						"@hooks": "./src/hooks",
						"@app-types": "./src/types",
						"@navigation": "./src/navigation",
						"@providers": "./src/providers",
						"@pokemon": "./src/features/pokemon",
						"@filters": "./src/features/filters",
					},
				},
			],
			["module:react-native-dotenv"],
		],
	};
};
