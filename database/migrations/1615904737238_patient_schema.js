'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('nome', 240).notNullable()
      table.date('data_nascimento')
      table.string('sexo')
      table.string('documento', 11)
      table.string('celular', 17)
      table.string('telefone', 17)
      table.string('endereco')
      table.date('data_dose1')
      table.date('data_dose2')
      table.string('lote_dose_1')
      table.string('lote_dose_2')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
