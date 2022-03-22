import React, { Fragment, useState } from 'react';
import axios from 'axios';

const EditBarang = ({ data }) => {

    const [barang, setBarang] = useState(data.nama_barang);
    const [harga, setHarga] = useState(data.harga);

    const simpanData = async e => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/barang/edit/${data.id}`, {
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
          <button type='button' className='btn btn-warning mr-2' data-toggle='modal' data-target={`#id${data.id}`}>Edit</button>
          
          { /* Isi modalnya */}
          <div className='modal fade' id={`id${data.id}`}>
              <div className='modal-dialog'>
                  <div className='modal-content'>

                    { /* modal header */}
                    <div className='modal-header'>
                        <h4 className ="text-center">Edit Barang</h4>
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
                            <button className="btn btn-primary center mt-2">Simpan</button>         
                        </form>
                    </div>

                  </div>
              </div>

          </div>

      </Fragment>
    
  )
}

export default EditBarang;