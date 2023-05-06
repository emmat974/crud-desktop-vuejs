const Employee = require('../models/employee')
const argon2 = require('argon2')

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