const sqliteConnection = require("../../sqlite")
const createUsers = require('./createUses')

async function migrationsRun() {
    const schemas = [
        createUsers
    ]
}