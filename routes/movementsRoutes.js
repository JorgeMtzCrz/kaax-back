const { getMovements, getMovement, createMovement } = require('../controllers/movementsControllers');
const router = require('express').Router();

router.get('/', getMovements)
router.post('/', createMovement)
router.get('/:id', getMovement)

module.exports = router