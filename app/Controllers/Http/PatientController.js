'use strict'
const Patient = use('App/Models/Patient')
class PatientController {
  async home({view}){
  
    const patients = await Patient.all();
    return view.render('/patients/show', {patients: patients.toJSON()});
  }
}

module.exports = PatientController
