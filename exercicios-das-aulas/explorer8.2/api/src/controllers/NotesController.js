const knex = require('../database/knex')

class NotesController {
    async create(request, response) {
        const { title, desciption, tags, links } = request.body
    }
}