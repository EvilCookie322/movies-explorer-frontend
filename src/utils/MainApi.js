import { MAIN_API_URL } from './const';

class MainApi {
	#url;
	#headers;

	constructor(apiUrl) {
		this.#url = apiUrl;
		this.#headers = {
			Accept: 'application/json',
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

	register(data) {
		return this.response(() =>
			fetch(`${this.#url}/signup`, {
				method: 'POST',
				credentials: 'include',
				headers: this.#headers,
				body: JSON.stringify(data)
			})
		)
	}

	login(data) {
		return this.response(() =>
			fetch(`${this.#url}/signin`, {
				method: 'POST',
				credentials: 'include',
				headers: this.#headers,
				body: JSON.stringify(data)
			})
		)
	}

	signOut() {
		return this.response(() =>
			fetch(`${this.#url}/signout`, {
				method: 'GET',
				credentials: 'include',
				headers: this.#headers
			})
		)
	}

	getUserInformation() {
		return this.response(() =>
			fetch(`${this.#url}/users/me`, {
				method: 'GET',
				credentials: 'include',
				headers: this.#headers
			})
		)
	}

	updateUserInformation(data) {
		return this.response(() =>
			fetch(`${this.#url}/users/me`, {
				method: 'PATCH',
				credentials: 'include',
				headers: this.#headers,
				body: JSON.stringify(data)
			})
		)
	}

	getSavedMovies() {
		return this.response(() =>
			fetch(`${this.#url}/movies`, {
				method: 'GET',
				credentials: 'include',
				headers: this.#headers
			})
		)
	}

	saveMovie(data) {
		return this.response(() =>
			fetch(`${this.#url}/movies`, {
				method: 'POST',
				credentials: 'include',
				headers: this.#headers,
				body: JSON.stringify(data)
			})
		)
	}

	deleteSavedMovie(id) {
		return this.response(() =>
			fetch(`${this.#url}/movies/${id}`, {
				method: 'DELETE',
				credentials: 'include',
				headers: this.#headers
			})
		)
	}
}

const MAIN_API = new MainApi(MAIN_API_URL);

export { MAIN_API as MainApi };