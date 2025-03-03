// eslint-disable-next-line import/no-unassigned-import
import "webext-base-css";
import "./options.css";
import { get } from "./accounts-storage.js";

const debug = document.getElementById("debug");

async function init() {
	let result = "";
	const accounts = await get();
	for (const [id, name] of Object.entries(accounts)) {
		result += `<li>${id}: ${name}</li>`;
	}

	debug.innerHTML = `<ul>${result}</ul>`;
}

init();
