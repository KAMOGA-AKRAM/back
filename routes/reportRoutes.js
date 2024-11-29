const express = require('express');
const { exportCsvReport, exportPdfReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/csv', exportCsvReport);
router.get('/pdf', exportPdfReport);

module.exports = router;
