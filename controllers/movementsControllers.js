const Movement = require('../models/Movement')

exports.createMovement = (req,res) => {
    const {body} = req
    Movement.create({...body})
    .then(movement => res.status(201).json({movement}))
    .catch(err => res.status(500).json({err}))
}

exports.getMovements = (req, res) => {
    Movement.find()
    .then(movements => res.status(201).json({movements}))
    .catch(err => res.status(500).json({err}))
}

exports.getMovement = (req, res) => {
    const {id} = req.params
    Movement.findById(id)
    .then(movements => res.status(201).json({movements}))
    .catch(err => res.status(500).json({err}))
}


