const express = require('express');
const {
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense,
} = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/', getExpenses);
router.put('/update', updateExpense);
router.delete('/delete', deleteExpense);

module.exports = router;
