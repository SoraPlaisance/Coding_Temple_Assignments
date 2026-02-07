// DOG IMAGE

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
		img.classList.add('dog-image');

		// Clear previous content and append the image
		output.innerHTML = '';
		output.appendChild(img);
	} catch (err) {
		console.error('Fetch error:', err);
		output.textContent = 'Sorry — could not fetch a dog image.';
	}
}

// CAT IMAGE

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
		img.classList.add('cat-image');

		output.innerHTML = '';
		output.appendChild(img);
	} catch (err) {
		console.error('Fetch error:', err);
		output.textContent = 'Sorry — could not fetch a cat image.';
	}
}

async function getWeather() {
    const output = document.getElementById('weather-output');

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&temperature_unit=fahrenheit&utm_source=chatgpt.com');
        const data = await response.json();

        output.innerHTML = `<p>Temperature: ${data.hourly.temperature_2m[0]}°C</p>`;
    } catch (err) {
        console.error('Weather fetch error:', err);
        output.textContent = 'Could not fetch weather data.';
    }
}

// CURREENCY RATES

 async function getExchangeRates() {
	const output = document.getElementById('currency-output');
	const baseInput = document.getElementById('currency-base').value.trim().toUpperCase();
	const amountInput = document.getElementById('currency-amount').value.trim();
	const targetInput = document.getElementById('currency-target').value.trim().toUpperCase();	
	const url = `https://v6.exchangerate-api.com/v6/b821af7c2344ea0bd0bd8aac/pair/${baseInput}/${targetInput}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		
			if (data.result === "success") {
				output.textContent = `${amountInput} ${baseInput} = ${(data.conversion_rate * parseFloat(amountInput))}`
			}
	} catch (error) {
		console.error('Currency fetch error:', error);
		output.textContent = 'Error fetching exchange rates.';
	}
}

// TMBD MOVIES

async function getMovies() {
	const output = document.getElementById('movies-output');
	const API_KEY = '0279f17d74293b7e12aac17d1bcd70ae';		// 0279f17d74293b7e12aac17d1bcd70ae
	const BASE_URL = 'https://api.themoviedb.org/3';
	const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		output.innerHTML = data.results
			.map(movie => `<p>${movie.title}</p>`)
			.join('');

	} catch (error) {
		console.error("Could not fetch popular movies:", error);
		output.textContent = "Failed to load movies.";
	}

}

// GET GUTHUB USER

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

	// Creates a button that opens the user's GitHub profile
	output.innerHTML = '';
	const url = data.html_url || `https://github.com/${encodeURIComponent(data.login)}`;
	const btn = document.createElement('button');
	btn.textContent = `${data.login}'s GitHub profile`;
	btn.type = 'button';
	btn.onclick = () => window.open(url, '_blank', 'noopener,noreferrer');
	btn.setAttribute('aria-label', `${data.login} GitHub profile`);
    btn.classList.add('github-btn');
	output.appendChild(btn);

    // If error:
	} catch (err) {
		console.error('GitHub fetch error:', err);
		output.textContent = 'Could not load GitHub user: ' + err.message;
	}
}

// RANDOM DAD JOKE

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

// API OF MY CHOICE

async function getPokemon() {
	const output = document.getElementById('pokemon-output');
	const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		if(!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		const pokemonSprite = data.sprites.front_default;
		const imgElement = document.getElementById('pokemonSprite');

		imgElement.src = pokemonSprite;
		imgElement.style.display = 'block';

		output.innerHTML = `<p><strong>Name:</strong> ${data.name}</p>
		<p><strong>Height:</strong> ${data.height}</p>
		<p><strong>Weight:</strong> ${data.weight}</p> 
		<p><strong>Type:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p> 
		<p><strong>Abilities:</strong> ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
		<p><strong>Stats:</strong></p>
		<ul>
			${data.stats.map(statInfo => `<li>${statInfo.stat.name}: ${statInfo.base_stat}</li>`).join('')}
		</ul>`;
	} 
	catch (error) {
		console.error('Pokemon fetch error:', error);
	}
}

