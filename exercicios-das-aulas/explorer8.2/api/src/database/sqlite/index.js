const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")
const path = requite("path")

async function sqiliteConnection() {
    const database =  await sqlite.open({
        filename: ""
    })
}