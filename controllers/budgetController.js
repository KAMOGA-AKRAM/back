const db = require('../models/db');

// Add Budget
exports.addBudget = (req, res) => {
    const { user_id, category, budget_limit, start_date, end_date } = req.body;
    const query = 'INSERT INTO budgets (user_id, category, budget_limit, start_date, end_date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [user_id, category, budget_limit, start_date, end_date], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Budget added successfully' });
    });
};

// Get Budgets
exports.getBudgets = (req, res) => {
    const { user_id } = req.query;
    const query = 'SELECT * FROM budgets WHERE user_id = ?';
    db.query(query, [user_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json(results);
    });
};

// Update Budget
exports.updateBudget = (req, res) => {
    const { id, category, budget_limit, start_date, end_date } = req.body;
    const query = 'UPDATE budgets SET category = ?, budget_limit = ?, start_date = ?, end_date = ? WHERE id = ?';
    db.query(query, [category, budget_limit, start_date, end_date, id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Budget updated successfully' });
    });
};

// Delete Budget
exports.deleteBudget = (req, res) => {
    const { id } = req.body;
    const query = 'DELETE FROM budgets WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Budget deleted successfully' });
    });
};
