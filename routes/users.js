var express = require('express');
var db = require('../db/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    let users = db;
    if (req.query.search) {
        users = db.filter(v => v.userName.toLowerCase().includes(req.query.search.toLowerCase()));
    }
    res.render('users', {users: users})
});

router.post('/', (req, res) => {
    let user = {userName: req.body.userName};
    db.unshift(user)
    res.render('user', {user})
});

router.delete('/', (req, res) => {
    db = db.filter(v => v.userName !== req.body.userName);
    res.send();
});

module.exports = router;
