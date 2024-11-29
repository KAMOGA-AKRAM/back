const express = require('express');
const {
    addIncome,
    getIncome,
    updateIncome,
    deleteIncome,
} = require('../controllers/incomeController');
const router = express.Router();

router.post('/add', addIncome);
router.get('/', getIncome);
router.put('/update', updateIncome);
router.delete('/delete', deleteIncome);

module.exports = router;
