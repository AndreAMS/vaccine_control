'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Laboratory extends Model {
    vaccine(){
        return this.hasMany('App/Models/Vaccine')
    }
}

module.exports = Laboratory
