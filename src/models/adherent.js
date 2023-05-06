const { getConnection } = require('../database');

const Adherent = {}

Adherent.fetch = async () => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC")
        return result
    } catch (error) {
        console.error(error)
    }
}

Adherent.fetchWithLimit = async (limit) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC LIMIT ?", limit)
        return result
    } catch (error) {
        console.error(error)
    }
}

Adherent.insert = async (adherent) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("INSERT INTO clients SET ?", adherent)

        return result
    }
    catch (error) {
        console.error(error)
    }
}

Adherent.get = async (id) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients WHERE id = ?", id)

        return result[0]
    } catch (error) {
        console.error(error)
    }
}

Adherent.search = async (search) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients WHERE nom like '%" + search + "%' or prenom like '%" + search + "%' or numero_carte like '%" + search + "%'")

        return result
    } catch (error) {
        console.error(error)
    }
}

module.exports = Adherent