'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require("moment");

class Patient extends Model {
  static get dates () {
    return super.dates.concat(['data_nascimento', 'data_dose1',  'data_dose2','data_previsao_2_dose'])
  }


   
   static castDates(field, value) {
    if (field === 'data_nascimento') {
      return value.format('DD/MM/YYYY')
    }else if (field === 'data_dose1') {
      return value.format('DD/MM/YYYY')
    }else if (field === 'data_dose2') {
      return value.format('DD/MM/YYYY')
    }else if (field === 'data_previsao_2_dose') {
      return value.format('DD/MM/YYYY')
    }
  }
}



module.exports = Patient
