//import express from 'express';
const express = require('express')
const Ctrl = require('../controller')

const router = express.Router();

router.route('/').get((req, res) => res.send('Hello World'));
router.post('/data', Ctrl.create)
router.put('/data/:id', Ctrl.updateData)
router.get('/data/:id', Ctrl.getByID)
router.get('/datas', Ctrl.getData)
router.delete('/del/:id', Ctrl.deleteData)


module.exports = router