import React, {Component, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Api from './Api'


const Content = () => {

  const[data,setData]=useState([])

  const restServer = () => {
    axios.get('http://127.0.0.1:8000/api/pengurus')
      .then(response=> {
          // console.log(response.data);
          setData(response.data);
      })
  }

  const delData=(id) => {
    axios.delete('http://127.0.0.1:8000/api/pengurus/'+id)
      .then(response=> {
          console.log(response);
          restServer();
      })
  }

  useEffect(() => {
    restServer();
    }, [])

  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-white bg-primary">
          Data Pengurus
        </div>
        <div className="card-body">
          <Link className="btn btn-success" to="/add">Tambah Data</Link>
          <div className="table-responsive mt-4">
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Gender</th>
                  <th>Gaji</th>
                  <th>Act</th>
                </tr>
              </thead>
              <tbody>

                {data.map(val=>(
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.nama}</td>
                  <td>{val.alamat}</td>
                  <td>{val.gender}</td>
                  <td>{val.gaji}</td>
                  <td><Link className="btn btn-small btn-warning" to={'/edit/' + val.id}>Edit</Link> | <button className="btn btn-small btn-danger" onClick={() => delData(val.id)}>Hapus</button></td>
                </tr>
                )) }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )

}

export default Content