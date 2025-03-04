export function log() {
	console.log(`[${chrome.runtime.getManifest().name}]`, ...arguments);
}

export async function waitFor(function_, maxTries = 100) {
	let result = null;
	let tries = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		if (tries > maxTries) {
			log('waiting condition failed');
			throw new Error('waiting condition failed');
		}

		tries++;
		log('waiting. try:', tries);
		// eslint-disable-next-line no-await-in-loop
		await sleep(200);

		result = function_();
		if (!result) {
			continue;
		}

		break;
	}

	return result;
}

function sleep(timeout) {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
}
