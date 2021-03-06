'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vaccine extends Model {
    laboratory(){
        return this.belongsTo('App/Models/Laboratory')
    }
    static get dates () {
        return super.dates.concat(['created_at'])
      }
    
       static castDates(field, value) {
        if (field === 'created_at') {
          return value.format('DD/MM/YYYY')
        }
      }
}

module.exports = Vaccine
