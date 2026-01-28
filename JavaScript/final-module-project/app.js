async function getDogImage() {
	const output = document.getElementById('dog-output');
	if (!output) return; // safety check, if output = false, print "loading..."

	output.textContent = 'Loading...';

	try {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		if (!response.ok) throw new Error('Network response error');
		const data = await response.json();

		// data.message contains the image URL
		const img = document.createElement('img');
		img.src = data.message;
		img.alt = 'Random dog';
        // Style :)
		img.style.maxWidth = '100%';
		img.style.height = 'auto';

		// Clear previous content and show the image
		output.innerHTML = '';
		output.appendChild(img);
	} catch (err) {
		console.error('Fetch error:', err);
		output.textContent = 'Sorry — could not fetch a dog image.';
	}
}

// Minimal safe stubs for other buttons so clicking them doesn't cause errors.
async function getCatImage() {
	const output = document.getElementById('cat-output');
	if (!output) return;

	output.textContent = 'Loading...';

	try {
		const response = await fetch('https://api.thecatapi.com/v1/images/search');
		if (!response.ok) throw new Error('Network response error');
		const data = await response.json();

		const img = document.createElement('img');
		img.src = data[0].url;
		img.alt = 'Random cat';
        // Style :)
		img.style.maxWidth = '100%';
		img.style.height = 'auto';

		output.innerHTML = '';
		output.appendChild(img);
	} catch (err) {
		console.error('Fetch error:', err);
		output.textContent = 'Sorry — could not fetch a cat image.';
	}
}

function getWeather() {
	const output = document.getElementById('weather-output');
	if (output) output.textContent = 'Not implemented yet.';
}

// Cached list of currency symbols (populated on page load)
let CURRENCY_SYMBOLS = null;

async function loadCurrencySymbols() {
	try {
		const resp = await fetch('https://api.exchangerate.host/symbols');
		if (!resp.ok) return;
		const data = await resp.json();
		CURRENCY_SYMBOLS = data && data.symbols ? Object.keys(data.symbols) : [];
		const dl = document.getElementById('currency-symbols');
		if (dl && CURRENCY_SYMBOLS) {
			dl.innerHTML = '';
			for (const code of CURRENCY_SYMBOLS) {
				const opt = document.createElement('option');
				opt.value = code;
				dl.appendChild(opt);
			}
		}
	} catch (err) {
		console.warn('Could not preload currency symbols:', err);
	}

	// sensible defaults if inputs exist
	const baseInput = document.getElementById('currency-base');
	if (baseInput && !baseInput.value) baseInput.value = 'USD';
	const amountInput = document.getElementById('currency-amount');
	if (amountInput && !amountInput.value) amountInput.value = '100';
}

// Populate symbols on page load
window.addEventListener('DOMContentLoaded', () => {
	loadCurrencySymbols();
});

function getExchangeRates() {
	// Fetch latest exchange rates and render a nested structure
	// Parent container -> header (base & date) -> ul list of rates (li items)
	const output = document.getElementById('currency-output');
	if (!output) return;

	// Read base from input (fallback to USD)
	const baseInput = document.getElementById('currency-base');
	const base = (baseInput && baseInput.value.trim()) ? baseInput.value.trim().toUpperCase() : 'USD';

	output.textContent = 'Loading...';

	(async () => {
		try {
			// Ensure we have symbols (try cached first)
			let available = CURRENCY_SYMBOLS;
			if (!available) {
				const symbolsResp = await fetch('https://api.exchangerate.host/symbols');
				if (!symbolsResp.ok) throw new Error('Symbols request failed');
				const symbolsData = await symbolsResp.json();
				available = symbolsData && symbolsData.symbols ? Object.keys(symbolsData.symbols) : [];
				CURRENCY_SYMBOLS = available;
				const dl = document.getElementById('currency-symbols');
				if (dl && available.length) {
					dl.innerHTML = '';
					for (const code of available) {
						const opt = document.createElement('option');
						opt.value = code;
						dl.appendChild(opt);
					}
				}
			}

			if (!available || !available.includes(base)) {
				output.innerHTML = '';
				const err = document.createElement('div');
				err.style.color = '#b00';
				const sample = (available && available.length) ? available.slice(0, 8).join(', ') + '...' : 'no symbols available';
				err.textContent = `Invalid base currency: ${base}. Try one of: ${sample}`;
				output.appendChild(err);
				return;
			}

			// Using exchangerate.host (free and CORS-friendly)
			const response = await fetch(`https://api.exchangerate.host/latest?base=${encodeURIComponent(base)}`);
			if (!response.ok) throw new Error('Network response was not ok');
			const data = await response.json();

			// Build nested DOM structure
			const container = document.createElement('div');
			const header = document.createElement('div');
			header.style.marginBottom = '0.5rem';
			header.textContent = `Base: ${data.base} — Date: ${data.date}`;
			container.appendChild(header);

			// If a target currency was provided, validate and show ONLY the conversion for the
			// requested amount (no other text/list). This clears other output and returns early.
			const targetInput = document.getElementById('currency-target');
			const amountInput = document.getElementById('currency-amount');
			const target = (targetInput && targetInput.value.trim()) ? targetInput.value.trim().toUpperCase() : null;
			const amountRaw = (amountInput && amountInput.value.trim()) ? amountInput.value.trim() : '';
			const amount = amountRaw === '' ? 1 : Number(amountRaw);
			if (target) {
				// validate target code and amount
				const codeValid = /^[A-Z]{3}$/.test(target);
				if (!codeValid) {
					output.innerHTML = '';
					const err = document.createElement('div');
					err.style.color = '#b00';
					err.textContent = `Invalid target code: ${target}. Use a 3-letter currency code like EUR.`;
					output.appendChild(err);
					return;
				}
				if (!Number.isFinite(amount) || amount <= 0) {
					output.innerHTML = '';
					const err = document.createElement('div');
					err.style.color = '#b00';
					err.textContent = `Invalid amount: ${amountRaw}. Enter a positive number.`;
					output.appendChild(err);
					return;
				}

				try {
					// Use the convert endpoint for the requested amount
					const convResp = await fetch(`https://api.exchangerate.host/convert?from=${encodeURIComponent(data.base)}&to=${encodeURIComponent(target)}&amount=${encodeURIComponent(amount)}`);
					if (!convResp.ok) throw new Error('Convert request failed');
					const convData = await convResp.json();

					output.innerHTML = '';
					if (convData && typeof convData.result === 'number') {
						const resultDiv = document.createElement('div');
						resultDiv.style.fontWeight = '600';
						resultDiv.textContent = `${Number(amount)} ${data.base} = ${Number(convData.result).toFixed(4)} ${target}`;
						output.appendChild(resultDiv);
					} else {
						// Fallback: try to compute using the rates map if available
						if (data.rates && typeof data.rates[target] === 'number') {
							const fallback = Number(amount) * Number(data.rates[target]);
							const resultDiv = document.createElement('div');
							resultDiv.style.fontWeight = '600';
							resultDiv.textContent = `${Number(amount)} ${data.base} = ${fallback.toFixed(4)} ${target} (calculated)`;
							output.appendChild(resultDiv);
						} else {
							console.warn('convert endpoint response:', convData);
							const err = document.createElement('div');
							err.style.color = '#b00';
							err.textContent = `Conversion not available for ${target}.`;
							output.appendChild(err);
						}
					}
				} catch (err) {
					console.error('Conversion fetch error:', err);
					output.innerHTML = '';
					const e = document.createElement('div');
					e.style.color = '#b00';
					e.textContent = `Could not retrieve conversion for ${target}.`;
					output.appendChild(e);
				}

				// We're done — do not show the rates list or header when target conversion was requested.
				return;
			}

			const list = document.createElement('ul');
			list.style.listStyle = 'none';
			list.style.paddingLeft = '0';
			list.style.margin = '0';

			// Show a few common currencies in a stable order, then fallback to others
			const preferred = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];
			const rates = data.rates || {};

			const seen = new Set();
			function addRate(code) {
				if (!rates[code] || seen.has(code)) return;
				seen.add(code);
				const li = document.createElement('li');
				li.style.marginBottom = '0.25rem';

				const bold = document.createElement('strong');
				bold.textContent = code + ': ';
				li.appendChild(bold);

				const span = document.createElement('span');
				span.textContent = Number(rates[code]).toFixed(4);
				li.appendChild(span);

				// Nested small detail (example of nested structure): show inverse (1 / rate)
				const sub = document.createElement('div');
				sub.style.fontSize = '0.85em';
				sub.style.color = '#555';
				const inv = (rates[code] && rates[code] !== 0) ? (1 / rates[code]) : null;
				sub.textContent = inv ? `1 ${code} = ${inv.toFixed(4)} ${data.base}` : '';
				li.appendChild(sub);

				list.appendChild(li);
			}

			// Preferred currencies first
			preferred.forEach(addRate);

			// Then add the first 8 remaining currencies (stable iteration)
			let count = 0;
			for (const code of Object.keys(rates)) {
				if (count >= 8) break;
				if (seen.has(code)) continue;
				addRate(code);
				count++;
			}

			container.appendChild(list);

			// Replace output content with the nested container
			output.innerHTML = '';
			output.appendChild(container);
		} catch (err) {
			console.error('Currency fetch error:', err);
			output.textContent = 'Sorry — could not fetch exchange rates.';
		}
	})();
}

function getMovies() {
	const output = document.getElementById('movies-output');
	if (output) output.textContent = 'Not implemented yet.';
}

async function getGitHubUser() {
	const output = document.getElementById('github-output');
	if (!output) return;

	const usernameInput = document.getElementById('github-username');
	const username = (usernameInput && usernameInput.value.trim()) ? usernameInput.value.trim() : 'username123';
	output.textContent = 'Loading...';

	try {
		const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
		if (!response.ok) {
			if (response.status === 404) throw new Error('User not found');
			throw new Error('Network response was not ok');
		}
		const data = await response.json();

	// Create a button that opens the user's GitHub profile
	output.innerHTML = '';
	const url = data.html_url || `https://github.com/${encodeURIComponent(data.login)}`;
	const btn = document.createElement('button');
	btn.textContent = `${data.login}'s GitHub profile`;
	btn.type = 'button';
	btn.onclick = () => window.open(url, '_blank', 'noopener,noreferrer');
	btn.setAttribute('aria-label', `${data.login} GitHub profile`);
	// Style! :)
    btn.style.display = 'inline-block';
	btn.style.marginTop = '6px';
	output.appendChild(btn);

    // If error:
	} catch (err) {
		console.error('GitHub fetch error:', err);
		output.textContent = 'Could not load GitHub user: ' + err.message;
	}
}

async function getJoke() {
	const output = document.getElementById('joke-output');
	if (!output) return;

	output.textContent = 'Loading...';

	try {
		// fetches a JSON object when accepted: application/json is provided
		const response = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
		if (!response.ok) throw new Error('Network response error');
		const data = await response.json();

		output.innerHTML = '';
		// Show the joke text
		const p = document.createElement('p');
		p.textContent = data.joke;
		output.appendChild(p);

	} catch (err) {
		console.error('Joke fetch error:', err);
		output.textContent = 'Sorry — could not fetch a joke.';
	}
}

function getPublicApiInfo() {
	const output = document.getElementById('publicapi-output');
	if (output) output.textContent = 'Not implemented yet.';
}

