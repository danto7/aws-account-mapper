import OptionsSync from "webext-options-sync";

const optionsStorage = new OptionsSync({
	defaults: {
		accountsCsv: "",
		accounts: {},
	},
	migrations: [
		OptionsSync.migrations.removeUnused,
	],
	logging: true,
});

export default optionsStorage;
