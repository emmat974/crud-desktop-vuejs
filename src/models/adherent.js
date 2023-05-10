const { getConnection } = require('../database');

const Adherent = {}

// On récupère tous les adhérents et ils ont trier de manière descendant par rapport à leur id
Adherent.fetch = async () => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC")
        return result
    } catch (error) {
        console.error(error)
    }
}
// On récupère tous les adhérents et ils ont trier de manière descendant par rapport à leur id et on fixe une limitation dans les résultats
Adherent.fetchWithLimit = async (limit) => {
    try {
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients ORDER BY id DESC LIMIT ?", limit)
        return result
    } catch (error) {
        console.error(error)
    }
}

// On créer un nouveau adhérent
Adherent.insert = async (adherent) => {
    try {
        console.log('INSERT ADHERENT')
        const conn = await getConnection()
        const result = await conn.query("INSERT INTO clients SET ?", adherent)

        return result
    }
    catch (error) {
        console.error(error)
    }
}

// On récupère un adhérent par rapport à l'id
Adherent.get = async (id) => {
    try {
        console.log('GET ADHERENT')
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients WHERE id = ?", id)

        return result[0]
    } catch (error) {
        console.error(error)
    }
}

// On effectue une recherche sur un adhérent, par rapport soit à son nom, prénom & numéro de carte bancaire
Adherent.search = async (search) => {
    try {
        console.log('SEARCH')
        const conn = await getConnection()
        const result = await conn.query("SELECT * FROM clients WHERE nom like '%" + search + "%' or prenom like '%" + search + "%' or numero_carte like '%" + search + "%'")

        return result
    } catch (error) {
        console.error(error)
    }
}

// On édit un adhérent
Adherent.edit = async (id, adherent) => {
    try {
        console.log('UPDATE ADHERENT');
        const conn = await getConnection()
        const result = await conn.query("UPDATE clients SET ? WHERE id = " + id, adherent)

        return result
    } catch (error) {
        console.error(error)
    }
}

// On supprime un adhérent
Adherent.delete = async (id) => {
    try {
        console.log('REMOVE ADHERENT')

        const conn = await getConnection()
        const result = await conn.query("DELETE FROM clients WHERE id =  " + id)

        return result
    } catch (error) {
        console.error(error)
    }
}

module.exports = Adherent
