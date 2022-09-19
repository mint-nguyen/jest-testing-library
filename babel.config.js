module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-typescript",
		["@babel/preset-react", { runtime: "automatic" }],
	],
	env: {
		production: {
			plugins: [
				[
					"react-remove-properties",
					{
						properties: ["data-test"],
					},
				],
			],
		},
	},
};
