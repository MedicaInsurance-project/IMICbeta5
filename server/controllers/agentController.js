//registration form for agent 

var Agent = require('../models/agentModel');

var agentController = {};

agentController.save = function (req, res, next) {
    var agent = new Agent({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
    })
    agent.setPassword(req.body.password);
    agent.save((err, agent) => {
        if (err) {
            let message = "";
            if (err.errors.email) message += "Email already exists.";
            if(err.errors.phone) message= " Phone number duplicate";
            if(err.errors.password) message= err;
            return res.json({
                success: false,
                message
            })
        } else {
            res.send(agent).status(200);
        };
    });

}


//customer api for forget password 
agentController.forgotPassword = function (req, res) {
    Agent.findOne({ email: req.body.email }, function (err, users) {
        if (!users) {
            res.status(401).send("Email  Not Found !! ");
        } else {
            const otp = parseInt(makeotp(6));
            console.log(`otp generated is ${otp}`);
            res.status(200).send({
                message:"Otp has been sent on your mail."}
                )
        }
    })
}

function makeotp(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = agentController;