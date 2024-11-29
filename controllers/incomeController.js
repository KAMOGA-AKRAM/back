const db = require('../models/db');

// Add Income
exports.addIncome = (req, res) => {
    const { user_id, source, amount, date, is_recurring } = req.body;
    const query = 'INSERT INTO income (user_id, source, amount, date, is_recurring) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [user_id, source, amount, date, is_recurring], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Income added successfully' });
    });
};

// Get Income
exports.getIncome = (req, res) => {
    const { user_id } = req.query;
    const query = 'SELECT * FROM income WHERE user_id = ?';
    db.query(query, [user_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json(results);
    });
};

// Update Income
exports.updateIncome = (req, res) => {
    const { id, source, amount, date, is_recurring } = req.body;
    const query = 'UPDATE income SET source = ?, amount = ?, date = ?, is_recurring = ? WHERE id = ?';
    db.query(query, [source, amount, date, is_recurring, id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Income updated successfully' });
    });
};

// Delete Income
exports.deleteIncome = (req, res) => {
    const { id } = req.body;
    const query = 'DELETE FROM income WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Income deleted successfully' });
    });
};
