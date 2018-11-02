const express = require('express');
const router = express.Router();
const api = require('../controllers/api');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/post-text', api.postText);

module.exports = router;
