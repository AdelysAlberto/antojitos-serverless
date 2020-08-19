const express = require('express');
const Meals =  require('../Models/Meals');
const router = express.Router();


router.get('/meals/', (req,res)=> {
    Meals.find().exec()
    .then(x => res.send(x))
    .catch(e => res.status(500))
})


router.get('/meals/:id', (req,res)=> {
    Meals.findById(req.params.id).exec()
    .then(x => res.status(200).send(x))
    .catch(e => res.status(500))
})


router.post('/meals', (req,res)=> {
   
    Meals.create(req.body)
    .then(x=>res.status(201).send(x))
    .catch(e=>res.status(400).send(x))
})

router.put('/meals/:id', (req,res)=> {
    Meals.findByIdAndUpdate(req.body.id, req.body)
    .then(x=> res.status(200).send(x))
    .catch(e=>res.status(400).send(x))
})

router.delete('/meals/:id', (req,res)=> {
    Meals.findOneAndDelete(req.params.id).exec()
    .then(()=>res.status(204))
    .catch(x=>res.status(400).send(x))
})

module.exports = router;