import { log } from "./utils.js";
import { get } from "./accounts-storage.js";

log("💈 Content script loaded");

async function getAccountId() {
	let accountId = null;
	let tries = 0;
	while (true) {
		if (tries > 100) {
			log("failed to get account id");
		}
		tries++;
		await new Promise((resolve) => setTimeout(resolve, 200));
		log("check menu for account id. try:", tries);

		const topMenu = document.getElementById("nav-usernameMenu");
		if (!topMenu) continue;
		accountId = topMenu.innerHTML.match(/Account ID: ([\d-]+)/)[1].replaceAll(
			"-",
			"",
		);
		if (!accountId) continue;
		break;
	}
	return accountId;
}

async function init() {
	const accounts = await get();

	const accountId = await getAccountId();

	const notice = document.createElement("div");
	notice.innerHTML = accounts[accountId];
	document.body.prepend(notice);
	notice.id = "text-notice";
	notice.style.border = "2px solid black";
}

init();
