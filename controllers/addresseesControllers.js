const Addressee = require('../models/Addressee')

exports.createAddressee = (req,res) => {
    const {body} = req
    Addressee.create({...body})
    .then(addressee => res.status(201).json({addressee}))
    .catch(err => res.status(500).json({err}))
}

exports.getAddressees = (req, res) => {
    Addressee.find()
    .then(addressees => res.status(201).json({addressees}))
    .catch(err => res.status(500).json({err}))
}

exports.getAddressee = (req, res) => {
    const {id} = req.params
    Addressee.findById(id)
    .then(addressees => res.status(201).json({addressees}))
    .catch(err => res.status(500).json({err}))
}

exports.updateAddressee = (req, res) => {
    const {id} = req.params
    Addressee.findByIdAndUpdate(id)
    .then(addressee => res.status(201).json({addressee}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteAddressee = (req,res) => {
    const {id} = req.params
    Addressee.findByIdAndDelete(id)
    .then(addressee => res.status(201).json({addressee}))
    .catch(err => res.status(500).json({err}))
}
