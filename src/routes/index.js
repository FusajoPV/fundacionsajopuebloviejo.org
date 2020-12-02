// routes 
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html',{title:'Fundación San Jose PV '});
});
router.get('/contact', (req, res) => {
    res.render('contact.html', {title:'Fundación San Jose PV'});
});

module.exports= router;