import { merge } from "./accounts-storage.js";
import { log, waitFor } from "./utils.js";

async function init() {
	const accountItems = await waitFor(() => {
		const items = document.querySelectorAll(
			"[data-testid=account-list-cell]",
		);
		return items.length != 0 ? items : null;
	});
	if (!accountItems) {
		log("failed to get account items");
		return;
	}

	const accounts = {};
	for (const accountItem of accountItems) {
		const subdivs = accountItem.querySelectorAll("div>div");
		const accountName = subdivs[0].textContent;
		const accountId = subdivs[1].textContent.match(/(\d+)/)[1];
		log("Found", accountName, accountId);
		accounts[accountId] = accountName;
	}
	await merge(accounts);
}
init();
