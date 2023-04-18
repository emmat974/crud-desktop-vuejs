const { getConnection } = require('../database');
const data = require('./fake_name')

async function generateFakeDataModel() {
    try {
        const conn = await getConnection()
        for (let i = 0; i < 25; i++) {
            const nomIndex = Math.floor(Math.random() * data['noms'].length);
            const prenomIndex = Math.floor(Math.random() * data['prenoms'].length);

            const adherent = {
                nom: data['noms'][nomIndex],
                prenom: data['prenoms'][prenomIndex],
                email: data['prenoms'][prenomIndex] + "." + data['noms'][nomIndex] + "@gmail.com",
                adresse: Math.floor(Math.random() * 200) + " rue de la " + data['noms'][nomIndex],
                telephone: "0123456789",
                mobile: "0123456789",
                numero_carte: Math.floor(Math.random() * (4976 - 4000 + 1) + 4000),
                date_expiration: (() => {
                    const startDate = new Date("2023-05-01")
                    const endDate = new Date("2026-12-31")
                    const diff = endDate.getTime() - startDate.getTime()
                    const randomTime = startDate.getTime() + Math.random() * diff
                    return new Date(randomTime)
                })(),
                cryptogramme: Math.floor(Math.random() * 999) + 1
            }
            const result = await conn.query("INSERT INTO clients SET ?", adherent)
        }
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = {
    generateFakeDataModel
}
