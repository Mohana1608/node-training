const router = require('express').Router();
const productservice = require('../services/productservices')


router.get('/',(req,res) =>{
    const products = productservice.getProducts()
    // console.log('Products')
    res.json({message: "Im in products"})
})

router.post('/',(req,res) =>{
    // console.log('Products ${req.params.id}')

    console.log(JSON.stringify(req.body,undefined,4));
    res.json({message: "In products"})
})
router.get('/:id',(req,res)=>{
    const id = req.params.id
    console.log(`Products ${id}`);
    res.json({message:" In products single"})
}
)

module.exports = router