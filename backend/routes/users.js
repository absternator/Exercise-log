// creates router page on /users
const router = require("express").Router();
let User = require("../models/user.model");

router.route("/")
.get((req,res) =>{
    User.find({},(err,foundUsers) =>{
        if(err){
            res.status(400).json("Error: " + err);
        } else {
            res.json(foundUsers);
        }
    })
});

router.post("/add", (req,res) =>{
    const newUser = new User({
        username: req.body.username
    });
    newUser.save(err =>{
        if(err){
            res.status(400).json("Error: " + err)
        } else {
            res.json("User added Yay");
        }
    })
});

module.exports = router;