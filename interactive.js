document.getElementById('generateJoke').addEventListener('click', getJoke);

// loading 
function showLoadingIndicator() {
    document.getElementById('jokeDisplay').innerHTML = '<p>Fetching joke...</p>';
}

async function getJoke() {
    const category = document.getElementById('jokeCategory').value;
    const type = document.getElementById('jokeType').value;
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?type=${type}`;

    // loading
    showLoadingIndicator();

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let jokeText = '';
        if (data.type === 'single') {
            jokeText = data.joke;
        } else {
            jokeText = `${data.setup} ... ${data.delivery}`;
        }

        document.getElementById('jokeDisplay').innerHTML = `<p>${jokeText}</p>`;
    } catch (error) {
        console.error('Failed to fetch joke:', error);
        document.getElementById('jokeDisplay').innerText = 'Failed to fetch a joke. Please try again.';
    }
}