const express = require('express');
const router = express.Router();
const api = require('../controllers/api');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('pololo');
    next();
});

router.post('/post-text', api.postText);

module.exports = router;
