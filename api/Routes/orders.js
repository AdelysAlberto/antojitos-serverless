const express = require('express');
const Orders =  require('../Models/Orders');
const router = express.Router();


router.get('/orders/', (req,res)=> {
    Orders.find().exec()
    .then(x => res.send(x))
    .catch(e => res.status(500))
})


router.get('/orders/:id', (req,res)=> {
    Orders.findById(req.params.id).exec()
    .then(x => res.status(200).send(x))
    .catch(e => res.status(500))
})


router.post('/orders', (req,res)=> {
    Orders.create(req.body)
    .then(x=>res.status(201).send(x))
    .catch(e=>res.status(400).send(x))
})

router.put('/orders/:id', (req,res)=> {
    Orders.findByIdAndUpdate(req.body.id, req.body)
    .then(x=> res.status(200).send(x))
    .catch(e=>res.status(400).send(x))
})

router.delete('/orders/:id', (req,res)=> {
    Orders.findOneAndDelete(req.params.id).exec()
    .then(()=>res.status(204))
    .catch(x=>res.status(400).send(x))
})

module.exports = router;