// eslint-disable-next-line import/no-unassigned-import
import 'webext-base-css';
import './options.css';
import {get} from './accounts-storage.js';

const accountsElement = document.querySelector('#accounts');

async function init() {
	const ul = document.createElement('ul');
	const accounts = await get();
	for (const [id, name] of Object.entries(accounts)) {
		const li = document.createElement('li');
		li.textContent = `${id}: ${name}`;
		ul.append(li);
	}

	accountsElement.innerHTML = '';
	accountsElement.append(ul);
}

init();
