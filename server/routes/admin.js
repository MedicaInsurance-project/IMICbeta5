var express = require('express');
var router = express.Router();

router.post('/adminLogin', (req, res) => {
    username = req.body.adminUsername;
    password = req.body.adminPassword;
    if (username === "admin") {
        if (password === "admin") {
            res.send({ mssg: "logged in successfully" });
        } else {
            res.status(401).send('Unauthorized Access');
        }
    } else {
        res.status(401).send('Unauthorized Access');
    }
});

module.exports = router;