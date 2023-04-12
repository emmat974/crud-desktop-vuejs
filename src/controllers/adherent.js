const Adherent = require("../models/adherent")

const fetchAdherents = async (event) => {
    try {
        const adherents = await Adherent.fetch();
        if (adherents) {
            event.sender.send('allAdherents', adherents)
        }
    } catch (error) {
        console.error(error)
    }
}

const insertAdherent = async (event, adherent) => {
    try {
        await Adherent.insert(adherent)
        event.reply('inserted', 'Adhérent inséré avec succès !')
    } catch (error) {
        console.error(error)
        event.reply('error', 'Erreur lors de l\'insertion de l\'adhérent.')
    }
}

const getAdherent = async (event, id) => {
    try {
        const adherent = await Adherent.get(id);
        if (adherent) {
            event.sender.send('adherent', adherent)
            event.reply(adherent)
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    fetchAdherents,
    insertAdherent,
    getAdherent
}