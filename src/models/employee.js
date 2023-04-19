const { getConnection } = require('../database');

const Employee = {}

Employee.fetch = async () => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC")
    } catch (error) {
        console.error(error)
    }
}

Employee.get = async (id) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM employes WHERE id = ?", id)

        return result[0]
    } catch (error) {
        console.error(error)
    }
}

Employee.login = async (email) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM employes WHERE email = ?", email)

        return result[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports = Employee