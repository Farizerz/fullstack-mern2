import Model from  '../models/model.js';

export const index = async (req, res) => {
    await Model.selectBarang(req, function(err, results) {
        res.json(results);
    });
};

export const selectByID = async (req, res) => {
    await Model.selectBarangByID(req, function (err, results) {
        res.json(results);
    });
};

export const inputDataBarang = async (req, res) => {
    
    await Model.inputBarang(req.body, () => {
        res.json({"message" : "Berhasil Input Data"});
    });
    
   
};

export const updateBarang = async (req, res) => {
    await Model.editBarang(req.body, req.params.id, () => {
        res.json({"message" : "Berhasil edit Data"});
    });
};

export const deleteBarang = async (req, res) => {
    await Model.hapusBarang(req, function (err, results) {
        res.json({'message' : 'Berhasil hapus data'});
    });
};