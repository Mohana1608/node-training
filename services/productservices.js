
const client = require('../db')
exports.getProducts = async () => {
    const result = await client.query('select * from products')
    return result.rows;
}

exports.getProductById = async (id) => {
    const result = await client.query(`select * from products where id = ${id}`)
    return result.rows[0]
}

exports.insert = async (userId, manufacturerId, product) => {
    try {
        const query = 'insert into products(name,code,m_id,price,description,quantity,created_at,created_by) VALUES($1,$2,$3,$4,$5,$6,$7, $8)'
        const values = [product.name, product.code,manufacturerId, product.price, product.description, product.quantity, new Date(), userId]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert product'
    }
}


// exports.getProducts = () =>{
//     return[
//         {
//             name:"Oppof9pro",
//             company: "Oppo",
//             manufacturer: "Japan",
//             price:"22,000",
//             owner:"Mani"
//         },
//     {
//         name:"Oppof9pro",
//         company: "Oppo",
//         manufacturer: "Japan",
//         price:"22,000",
//         owner:"Mani" 
//     }
// ]
// }