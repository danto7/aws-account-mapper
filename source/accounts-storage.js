export async function get() {
	const result = await chrome.storage.local.get(['accounts']);
	return result.accounts || {};
}

export async function merge(accountsToAdd) {
	const accounts = await get();
	for (const [id, name] of Object.entries(accountsToAdd)) {
		accounts[id] = name;
	}

	return chrome.storage.local.set({accounts});
}
