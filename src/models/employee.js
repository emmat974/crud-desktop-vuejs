const { getConnection } = require('../database');

const Employee = {}

// On récupère tous les employées et on trie par rapport aux dernières ajouts
Employee.fetch = async () => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC")

        return result
    } catch (error) {
        console.error(error)
    }
}

// On récupère un employé par rapport à son id
Employee.get = async (id) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM employes WHERE id = ?", id)

        return result[0]
    } catch (error) {
        console.error(error)
    }
}

// On récupère un email par rapport à son email
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