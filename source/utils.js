export function log() {
	console.log(`[${chrome.runtime.getManifest().name}]`, ...arguments);
}

export async function waitFor(func, maxTries = 100) {
	let result = null;
	let tries = 0;
	while (true) {
		if (tries > maxTries) {
			log("failed to get account id");
		}
		tries++;
		await new Promise((resolve) => setTimeout(resolve, 200));
		log("waiting. try:", tries);

		result = func();
		if (!result) continue;
		break;
	}
	return result;
}
