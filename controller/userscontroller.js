const router = require('express').Router();
const usersService = require('../services/usersService')


router.get('/:id',async(req,res) =>{

    const users_table = await usersService.getUsersById(parseInt(id))

    // console.log('Users')
    res.json({users_table: users_table})
})


router.post('/', async (req, res) => {
    try {
        await usersService.insert(req.body)
        res.json({ message: 'In users post'})
    } catch (err) {
        res.status(422).json({ message: err })
    }
})

module.exports = router