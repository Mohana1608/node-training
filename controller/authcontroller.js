const router = require("express").Router();
const authService = require('../services/authservice')

router.post('/',(req,res)=>{
    try{
        const {username,password} = req.body
        authService.login(username,password)
        res.json({token:"Generated"})

    }catch(err){
        res.status(401).json({message:err})
    }
    // console.log(JSON.stringify(req.body,undefined,4));

    // res.json({token:"Generated"})
})

module.exports = router