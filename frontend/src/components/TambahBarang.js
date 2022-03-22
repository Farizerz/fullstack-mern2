import React, { Fragment, useState } from 'react';
import axios from 'axios';

const TambahBarang = () => {

    const [barang, setBarang] = useState("");
    const [harga, setHarga] = useState();

    const simpanData = async e => {
        e.preventDefault();
        try {
            await axios.post(`http://${process.env.REACT_APP_HOST}:5000/barang/create`, {
                nama_barang: barang,
                harga: harga
            });
        } catch (err) {
            console.error(err.message);
        }
        window.location = "/";
    }

  return (
      <Fragment>
        { /* Tombol untuk membuka modal */}
        <button type='button' className='btn btn-success mt-2' data-toggle='modal' data-target='#tambahModal'>Add</button>

        { /* Isi modalnya */}
        <div className='modal fade' id='tambahModal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    
                    { /* modal header */}
                    <div className='modal-header'>
                        <h4 className ="text-center">Tambah Barang</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    { /* modal body */}
                    <div className='modal-body'>
                        <form className='' onSubmit={ simpanData }>
                            Nama Barang: <input type="text" 
                                                className="form-control" 
                                                value={barang} 
                                                onChange={e => setBarang(e.target.value)}
                                        />
                            Harga: <input type="number" 
                                        className="form-control" 
                                        value={harga} 
                                        onChange={e => setHarga(e.target.value)}
                                    />
                            <button className="btn btn-success center mt-2">Tambah</button>         
                        </form>
                    </div>

                </div>
            </div>
        </div>
      </Fragment>
    
  )
}

export default TambahBarang;