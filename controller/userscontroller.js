const router = require('express').Router();
const usersService = require('../services/usersService')


router.get('/:id',(req,res) =>{
    console.log('Users')
    res.json({message: "Im in users"})
})


router.get('/',(req,res) =>{
    const usersList = usersService.getUsers()
    res.json({users: usersList})
})


module.exports = router