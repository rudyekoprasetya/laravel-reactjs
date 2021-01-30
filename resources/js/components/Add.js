import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {


return (
	<div className="container">
		<div class="card">
		  <div class="card-header text-white bg-primary">
		    Tambah Data
		  </div>
		  <div class="card-body">
		    <label>Nama</label>
		    <input type="text" id="nama" class="form-control" />
		    <label>Alamat</label>
		    <textarea id="nama" class="form-control"></textarea>
		    <label>Gender</label>
		    <select id="gender" class="form-control">
		    	<option value="L">Laki-laki</option>
		    	<option value="P">Perempuan</option>
		    </select>
		    <label>Gaji</label>
		    <input type="text" id="gaji" class="form-control" />
		    <br />
			<p><Link class="btn btn-default" to="/">Back</Link> <button class="btn btn-primary">Save</button></p>
		  </div>
		</div>
	</div>
)
}

export default Add