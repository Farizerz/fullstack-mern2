import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'; 
import EditBarang from './EditBarang';

const ListBarang = () => {
    const [dataBarang, setDataBarang] = useState([]);

    useEffect(() => {
        selectBarang();
    } ,[]);

    const selectBarang = async () => {
        const response = await axios.get(`http://localhost:5000/barang/`);
        const jsonData = await response.data;
        setDataBarang(jsonData);
    }

    const deleteBarang = async (id) => {
        await axios.delete(`http://localhost:5000/barang/delete/${id}`);
        selectBarang();
    }

  return (
    <Fragment>
        <h1 className ="text-center mt-5">List Barang</h1>
        <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Date Created</th>
                    <th>Date Edited</th>
                    <th>Actions</th>
                </tr> 
            </thead>
            <tbody>
                {
                    dataBarang.map((allBarang, index) => (
                        <tr key = {allBarang.id}>
                            <td>{index +1}</td>
                            <td>{allBarang.nama_barang}</td>
                            <td>{allBarang.harga}</td>
                            <td>{(allBarang.createdAt).substring(0,10)}</td>
                            <td>{(allBarang.updatedAt).substring(0,10)}</td>
                            <td>
                                <EditBarang data={ allBarang } />
                                <button className='btn btn-danger' onClick= { () => deleteBarang(allBarang.id) }>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </Fragment>
  )
}

export default ListBarang