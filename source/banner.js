import { log, waitFor } from "./utils.js";
import { get } from "./accounts-storage.js";

log("💈 Content script loaded");

async function init() {
	const accounts = await get();

	const accountId = await waitFor(() => {
		const topMenu = document.querySelector(
			"div[data-testid=account-detail-menu]",
		);
		if (!topMenu) return null;

		return topMenu.textContent.match(/((\d{4}-?){3})/)[1].replaceAll(
			"-",
			"",
		);
	});
	if (!accountId) {
		return;
	}

	const notice = document.createElement("div");
	notice.textContent = accounts[accountId];
	document.body.prepend(notice);
	notice.id = "text-notice";
	notice.style.border = "2px solid black";
}

init();
