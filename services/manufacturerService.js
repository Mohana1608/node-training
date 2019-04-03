const client = require('../db')
exports.getManufacturer = async() =>{
    const result = await client.query('select * from manufacturer')
    return result.rows;
}

exports.getManufacturerById = async(id) => {
    const result = await client.query(`select * from manufacturer where id ${id}`)
    return result.rows[0]
}
exports.insert = async (manufacturer) => {
    try {
        const query = 'insert into manufacturer(t_name,t_company,t_city,t_state,t_country,t_pincode) VALUES($1,$2,$3,$4,$5,$6)'
        const values = [manufacturer.t_name, manufacturer.t_company,manufacturer.t_city, manufacturer.t_state, manufacturer.t_country,manufacturer.t_pincode,]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert manufacturer'
    }
}
