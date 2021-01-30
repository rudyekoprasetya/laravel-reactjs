import axios from 'axios'

class Api {

	getPengurus() {
		return axios.get('http://127.0.0.1/api/pengurus');
	}

	addPengurus(data) {
		return axios.post('http://127.0.0.1/api/pengurus',data);
	}

	updatePengurus(data,id) {
		return axios.put('http://127.0.0.1/api/pengurus/'+id,data);
	}

	deletePengurus(id) {
		return axios.delete('http://127.0.0.1/api/pengurus/'+id);
	}
}

export default Api