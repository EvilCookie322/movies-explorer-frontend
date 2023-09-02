import { MOVIES_API_URL } from './const';

class MoviesApi {
	#url;
	#headers;

	constructor(apiUrl) {
		this.#url = apiUrl;
		this.#headers = {
			'Content-Type': 'application/json',
		};
	}

	response(fetch) {
		return fetch()
			.then((response) => {
				return response.ok ?
					response.json()
					:
					Promise.reject(response)
			})
			.catch((error) => {
				console.log(error);
				return Promise.reject(error);
			})
	}

	getMovies() {
		return this.response(() =>
			fetch(`${this.#url}/beatfilm-movies`, {
				method: 'GET',
				headers: this.#headers,
			}));
	}
}

const MOVIES_API = new MoviesApi(MOVIES_API_URL);

export { MOVIES_API as MoviesApi };