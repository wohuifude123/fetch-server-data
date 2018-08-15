module.exports = {
	async get(url, headers, postBody) {
		const _self = this;
		let response = [];
		try {
			const response = await fetch(url, {
				method: 'GET',
				body: postBody,
				headers: headers,
				mode: 'cors',
				credentials: 'include'
			})
			return await response.json();

		} catch (e) {
			console.log("Oops, error", e)
		}
	},
	async post(url, headers, postBody) {
		const _self = this;
		let response = [];
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: postBody,
				headers: headers,
				mode: 'cors',
				credentials: 'include'
			})
			return await response.json();

		} catch (e) {
			console.log("Oops, error", e)
		}
	}
}





