const {Client} = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost', //127.0.0.1
    database: 'ecommerce',
    password: 'mona16',
    port: 5432,
  })
  client.connect()


//   client.query('select * from products',(err,res)=>{
//       console.log(res)
//   }) //this comment is used for whether database is coneected or not

  module.exports = client