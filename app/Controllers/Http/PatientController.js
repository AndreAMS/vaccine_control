'use strict'
const Patient = use('App/Models/Patient')
const Vaccine = use('App/Models/Vaccine')
const Database = use('Database')
class PatientController {
  async home({view}){
  
    const patients = await Patient.all();
    return view.render('/patients/show', {patients: patients.toJSON()});
  }

  async store({request, response, session}){
    const patient = new Patient()
    patient.nome = request.input('nome'),
    patient.data_nascimento = request.input('newDate'),
    patient.sexo = request.input('sexo'),
    patient.documento = request.input('documento')

    await patient.save()

    session.flash({notification: "Paciente Incluido com sucesso"})
    return response.redirect('/patients')
  }

  async vaccinate({params, request, response, session}){
    const patient = Patient.find(params.id)
    const vaccine = Patient.find(params.vaccine_id)
    patient.lote_dose_1 = request.input('laboratories')

    await patient.save()

  }
}

module.exports = PatientController
