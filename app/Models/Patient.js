'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {
  static formatDates (field, value) {
    if (field === 'data_nascimento') {
      return value.format('DD-MM-YYYY')
    }
    return super.formatDates(field, value)
  }
}

module.exports = Patient
