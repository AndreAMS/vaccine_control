'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VaccineSchema extends Schema {
  up () {
    this.create('vaccines', (table) => {
      table.increments()
      table.string('lote')
      table.date('data_recebimento')
      table.integer('quantidade_doses')
      table.integer('dias_segunda_dose')      
      table.string('observacao')
        
      table.timestamps()
    })
  }

  down () {
    this.drop('vaccines')
  }
}

module.exports = VaccineSchema
