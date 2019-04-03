const router = require('express').Router();
const manufacturerService = require('../services/manufacturerService')


router.get('/:id',async(req,res) =>{

    const manufacturer = await manufacturerService.getManufacturerById(parseInt(id))
    res.json({manufacturer: manufacturer})
})


router.post('/', async (req, res) => {
    try {
        await manufacturerService.insert(req.body)
        res.json({ message: 'In manufacturer post'})
    } catch (err) {
        res.status(422).json({ message: err })
    }
})



module.exports = router