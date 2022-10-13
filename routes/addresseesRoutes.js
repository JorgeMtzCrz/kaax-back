const { getAddressees, getAddressee, updateAddressee, deleteAddressee, createAddressee } = require('../controllers/addresseesControllers');
const router = require('express').Router();

router.get('/', getAddressees)
router.get('/:id', getAddressee)
router.post('/', createAddressee)
router.patch('/:id', updateAddressee)
router.delete('/:id', deleteAddressee)

module.exports = router