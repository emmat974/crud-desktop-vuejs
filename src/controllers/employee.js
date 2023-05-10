const Employee = require('../models/employee')
const argon2 = require('argon2')

// On récupère tous les employés
const fetchEmployes = async (event) => {
    try {
        const employees = await Employee.fetch();
        if (employees) {
            event.sender.send('allEmployes', employees)
        }
    } catch (error) {
        console.error(error)
    }
}

// On récupère un adhérent par rapport à son email et on vérifie si le mot de passe correspond à la base de donnée
const loginEmploye = async (event, email, password) => {
    try {
        const employee = await Employee.login(email);
        if (employee) {
            const passwordHash = await argon2.verify(employee.password, password)
            if (passwordHash) {
                return employee
            }
            return false
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    fetchEmployes,
    loginEmploye
}