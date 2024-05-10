const express = require('express');

const purchase = require('../controllers/razorPayUser');

const userautheticate = require('../middleware/auth');

const router = express.Router();

router.get('/premiummembership', userautheticate.authenticate, purchase.purchasepremium);

router.post('/updatetransactionstatus', userautheticate.authenticate, purchase.updateTransactionStatus)

module.exports = router;