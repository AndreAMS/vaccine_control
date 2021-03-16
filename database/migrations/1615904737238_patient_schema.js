'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('nome', 240).notNulalable()
      table.date('data')
      table.string('cpf', 11).notNulalable()
      table.string('celular', 17)
      table.string('telefone', 17)
      table.string('endereco')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
