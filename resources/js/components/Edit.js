import React, { useEffect, useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from "react-router-dom"

// fungsi yang digunakan untuk menghandling state formData
const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	}
 }

const Edit = () => {
	// variabel mengambil id dari paramater
	let { id } = useParams();
	// variabel instansi react-router untuk navigasi
	const history = useHistory();

	// formdata yang menggunakan usereducer
	const [formData, setFormData] = useReducer(formReducer, {});
	const [user, setUser] = useState([]);


	const handleSubmit = event => {
		event.preventDefault();
		console.log(formData)
		axios.put('http://127.0.0.1:8000/api/pengurus/'+id, formData)
		.then(response=> {
			history.push('/');
			console.log(response);
		})
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

	const fetchUserDataById = (id) => {
		axios.get('http://127.0.0.1:8000/api/pengurus/'+id)
			.then(response=> {
				console.log(response)
				setUser(response.data)
			})
	}

	useEffect(() => {
		fetchUserDataById(id);
	}, [])

	return (
		<div className="container">
			<div className="card">
				<div className="text-white card-header bg-primary">
					Edit Data
				</div>
				<div className="card-body">
					<form onSubmit={handleSubmit}>

						<label>Nama</label>
						<input type="text" id="nama" className="form-control" defaultValue={user.nama || ''} name="nama" onChange={handleChange}/>

						<label>Alamat</label>
						<textarea id="nama" className="form-control" name="alamat" defaultValue={user.alamat || ''} onChange={handleChange}></textarea>

						<label>Gender</label>
						<select id="gender" className="form-control" name="gender" onChange={handleChange}>
							<option value="L">Laki-laki</option>
							<option value="P">Perempuan</option>
						</select>

						<label>Gaji</label>
						<input type="text" id="gaji" name="gaji" defaultValue={user.gaji || ""} className="form-control" onChange={handleChange} />

						<br />
						<p><Link className="btn btn-default" to="/">Back</Link> <button type="submit" className="btn btn-primary">Save</button></p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Edit