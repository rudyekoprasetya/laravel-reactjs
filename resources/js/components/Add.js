import React, { useState, useReducer } from 'react'
import { Link, useHistory } from 'react-router-dom'



// fungsi dibawah berguna untuk merangkum semua data form lalu dimasukkan kedalam fungsi useReducer
const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	}
 }


const Add = () => {
	// instansi dari react-router yang nantinya digunakan untuk menavigasi halaman
	const history = useHistory();

	// variabel destructor yang berperan untuk set dan get data dari form
	const [formData, setFormData] = useReducer(formReducer, {});

	const handleSubmit = event => {
		event.preventDefault();
		console.log(formData)
		axios.post('http://127.0.0.1:8000/api/pengurus/', formData)
		.then(response=> {
			history.push('/');
			console.log(response);
		})
	}

	// fungsi menghandle perubahan ketika input diketik akan mengirim langsung value sekaligus nama input kedalam formdata
	const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
	}


	return (
		<div className="container">
			<div class="card">
				<div class="card-header text-white bg-primary">
					Tambah Data
				</div>
				<div class="card-body">
					<form onSubmit={handleSubmit}>
						<label>Nama</label>
						<input type="text" id="nama" name="nama" class="form-control" onChange={handleChange} />
						<label>Alamat</label>
						<textarea id="nama" name="alamat" class="form-control" onChange={handleChange} ></textarea>
						<label>Gender</label>
						<select id="gender" name="gender" class="form-control" onChange={handleChange}>
							<option value="L">Laki-laki</option>
							<option value="P">Perempuan</option>
						</select>
						<label>Gaji</label>
						<input type="text" id="gaji" name="gaji" class="form-control" onChange={handleChange} />
						<br />
						<p><Link class="btn btn-default" to="/">Back</Link> <button type="submit" class="btn btn-primary">Save</button></p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Add