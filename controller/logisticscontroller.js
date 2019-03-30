const router = require('express').Router();

router.post('/',(req,res) =>{
    console.log('Logistics')
    console.log(JSON.stringify(req.body,undefined,4));

    res.json({message: "Im in logistics"})
})

router.get('/id',(req,res) =>{
    console.log('Logistics ${req.params.id}')
    res.json({message: "In logistic"})
})


router.get('/id/products',(req,res) =>{
    console.log('Logistics ${req.params.id}')
    res.json({message: "In logistic"})
})

module.exports = router