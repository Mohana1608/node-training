const router = require('express').Router();
const productservice = require('../services/productservices')


router.get('/', async (req, res) => {
    const products = await productservice.getProducts()
    // console.log('Products')
    res.json({ products: products })
})

router.post('/:username/:manufacturerId', async (req, res) => {
    try {
        const { username, manufacturerId } = req.params
        console.log("I'm in products")
        await productservice.insert(username, parseInt(manufacturerId), req.body)
        res.json({ message: "In products post" })
    } catch (err) {
        res.status(422).json({ message: err })
    }
    // console.log('Products ${req.params.id}')
    // console.log(JSON.stringify(req.body, undefined, 4));
    // res.json({ message: "In products" })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const product = await productservice.getProductById(parseInt(id))
    res.json({ product: product })
}
)

module.exports = router