'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LaboratoriesSchema extends Schema {
  up () {
    this.create('laboratories', (table) => {
      table.increments()
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('laboratories')
  }
}

module.exports = LaboratoriesSchema
