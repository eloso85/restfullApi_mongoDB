const express = require('express');
const subscriber = require('../models/subscriber.js');
const router = express.Router();
//schema
const Subscriber = require('../models/subscriber.js')


//Get all subscribers
router.get('/', async (req, res)=>{
    try {
        const subscriber = await Subscriber.find()
        res.json(subscriber)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
});

//Get one subscriber
router.get('/:id', (req, res)=>{
});

// Create one subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
      name: req.body.name,
      subscribedChannel: req.body.subscribedChannel
    })
  
    try {
      const newSubscriber = await subscriber.save()
      res.status(201).json(newSubscriber)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
// router.post('/', async (req, res)=>{
//     const subscriber = new Subscriber({
//         name: req.body.name,
//         subscribedChannel: req.body.subscribedChannel
//     })

//     try {
//         const newSubscriber = await subscriber.save()
//         res.status(201).json(newSubscriber)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// });

// Update one subscriber
router.patch('/:id', (req, res)=>{
});

router.delete('/:id', (req, res)=>{
});

async function getSubscriber(req, res, next){
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({ message: "cant find subscriber"})
        }

    } catch (error) {
        
    }
}


module.exports = router