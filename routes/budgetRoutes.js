const express = require('express');
const {
    addBudget,
    getBudgets,
    updateBudget,
    deleteBudget,
} = require('../controllers/budgetController');
const router = express.Router();

router.post('/add', addBudget);
router.get('/', getBudgets);
router.put('/update', updateBudget);
router.delete('/delete', deleteBudget);

module.exports = router;
