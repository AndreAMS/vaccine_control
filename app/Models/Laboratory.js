'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Laboratory extends Model {
    vaccine(){
        return this.hasMany('App/Models/Vaccine')
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

module.exports = Laboratory
