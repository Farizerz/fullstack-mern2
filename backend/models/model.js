import db from '../config/db.js';
import express from 'express';

const app = express();
app.use(express.json());

const date = new Date().toISOString().slice(0, 10);

const Model = {
    selectBarang(data, callback) {
        try {
            db.query("SELECT * FROM tabel_barang", function(err, res) {
                callback(null, res);
            });
                
        } catch (error) {
            console.error(error.message);
        }
    },

    selectBarangByID(data, callback) {
        try {
            const { id } = data.params;
            db.query(`SELECT * FROM tabel_barang WHERE id = ${id}`, function(err, res) {
                callback(null, res);
            });
                
        } catch (error) {
            console.error(error.message);
        }
    },

    inputBarang(data, callback) {
        try {
            db.query(`INSERT INTO tabel_barang 
                        (nama_barang, harga, createdAt, updatedAt) 
                        VALUES 
                        ("${data.nama_barang}", "${data.harga}", "${date}", "${date}")`, callback);
            console.log(date);

        } catch (error) {
            console.error(error.message);
        }
    },

    editBarang(data, id, callback) {
        try{
            db.query(`UPDATE tabel_barang SET 
                      nama_barang = "${data.nama_barang}", 
                      harga = "${data.harga}",
                      updatedAt = "${date}"
                      WHERE id = ${id}`, callback);
        } catch (error) {
            console.error(error.message);
        }
    },

    hapusBarang(data, callback) {
        try {
            const { id } = data.params;
            db.query(`DELETE FROM tabel_barang WHERE id = ${id}`, callback);
        } catch (error) {
            console.error(error.message);
        }
    }

}

export default Model;
/*
module.exports = {
    get: async (req, res) => {
        try {
            db.query("SELECT * FROM tabel_barang", function (err, result, fields) {
                if (err) throw err;
                
            });
        } catch (error) {
            console.error(error.message)
        }
        //db.query(`SELECT * FROM tabel_barang`, callback);

    },

    selectById: function(db, id, callback) {
        db.query(`SELECT FROM tabel_barang WHERE id = ${id}`, callback);
    },

    inputBarang: function (db, data, callback) {
        db.query(`INSERT INTO tabel_barang SET
                  nama_barang = ${data.nama_barang}, 
                  harga = ${data.harga}`, 
                  callback);
    },

    editBarang: function (db, data, id, callback) {
        db.query(`UPDATE tabel_barang SET
                  nama_barang = ${data.nama_barang}, 
                  harga = ${data.harga}
                  WHERE id = ${id}`, 
                  callback);
    },
    
    hapusBarang: function (db, id, callback) {
        db.query(`DELETE FROM tabel_barang WHERE id = ${id}`, callback);
    }
}
*/