import express from 'express';
import {index, 
        selectByID,
        inputDataBarang,
        updateBarang,
        deleteBarang
        }  from '../controllers/controller.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', selectByID);
router.post('/create', inputDataBarang);
router.patch('/edit/:id', updateBarang);
router.delete('/delete/:id', deleteBarang);

export default router;