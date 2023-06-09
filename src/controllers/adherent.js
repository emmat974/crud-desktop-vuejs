const Adherent = require("../models/adherent")

// On récupère tous les adhérents
const fetchAdherents = async (event) => {
    try {
        const adherents = await Adherent.fetch();
        if (adherents) {
            return adherents
        }
    } catch (error) {
        console.error(error)
    }
}

// On récupères tous les adhérents et on fixe une limitation
const fetchAdherentsWithLimit = async (event, limit) => {
    try {
        const adherents = await Adherent.fetchWithLimit(limit);
        if (adherents) {
            return adherents
        }
    } catch (error) {
        console.error(error)
    }
}

// On ajout un adhérent
const insertAdherent = async (event, adherentString) => {
    try {
        const adherent = JSON.parse(adherentString)
        const result = await Adherent.insert(adherent)
        return result
    } catch (error) {
        console.error(error)
    }
}

const getAdherent = async (event, id) => {
    try {
        const adherent = await Adherent.get(id)
        if (adherent) {
            // event.sender.send('adherent', adherent)
            // event.reply(adherent)
            return adherent
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

const searchAdherent = async (event, search) => {
    try {
        const adherents = await Adherent.search(search)
        if (adherents) {
            // event.sender.send('searchAdherent', adherents)
            return adherents
        }
    } catch (error) {
        console.error(error)
    }
}

// On met un jour un adhérent
const updateAdherent = async (event, adherentString) => {
    try {
        const adherent = JSON.parse(adherentString)
        const result = await Adherent.edit(adherent.id, adherent)

        return result
    } catch (error) {
        console.error(error)
    }
}

// On supprime un adhérent
const deleteAdherent = async (event, id) => {
    try {
        const result = await Adherent.delete(id)

        return result
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    fetchAdherents,
    insertAdherent,
    getAdherent,
    searchAdherent,
    fetchAdherentsWithLimit,
    updateAdherent,
    deleteAdherent
}