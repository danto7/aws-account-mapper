export async function get() {
	return (await chrome.storage.local.get(["accounts"])).accounts || {};
}

export async function merge(accountsToAdd) {
	const accounts = await get();
	for (const [id, name] of Object.entries(accountsToAdd)) {
		accounts[id] = name;
	}
	return await chrome.storage.local.set({ accounts });
}
