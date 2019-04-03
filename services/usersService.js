const client = require('../db')

exports.getUsers_table = async() =>{
    const result = await client.query('select * from users_table')
    return result.rows;
}

exports.getUsers_tableById = async(id) => {
    const result = await client.query(`select * from users_table where id = 4`)
    return result.rows[0]
}

exports.insert = async (users) => {
    try {
        const query = 'insert into users_table(username,firstname,lastname,email,mobile,designation,status,isdeleted) VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
        const values = [users.username, users.firstname,users.lastname, users.email, users.mobile, users.designation, users.status,users.isdeleted]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert users'
    }
}




// exports.getUsers = () =>{
//     return [
//         {
//             firstName: "Vivo Y53",
//             lastName: "Vivo",
//             email: "China",
//             phone: "10,000",
//             designation: "Mona",
//             status:"Active"
//           },
//           {
//             firstName: "Vivo Y53",
//             lastName: "Vivo",
//             email: "China",
//             phone: "10,000",
//             designation: "Mona",
//             status:"Active"
//           }
//     ]
// }