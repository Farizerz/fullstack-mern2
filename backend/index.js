import express from 'express';
const app = express();
import db from './config/db.js';
import cors from 'cors';
import router from './routes/index.js';

//connect to the database
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//jalankan route
app.use('/barang', router);

app.listen(5000, () => {
    console.log("Server running on port 5000");
})