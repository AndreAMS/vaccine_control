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
    const patient = await Patient.find(params.patient_id)
    const vaccineId = request.input('vaccineID')
    //const vaccine = Patient.find(params.vaccine_id)
    patient.lote_dose_1 = request.input('laboratories')
   // patient.nome = 'Mudou',
   // patient.data_nascimento = '2021-05-05',
   // patient.sexo = 'M',
    patient.documento ='11653979607'
    console.log(">>>>>>>>>>>>" + request.input('laboratories'))
    await Database
  .table('vaccines')
  .where('id', vaccineId)
  .decrement('quantidade_doses', 1)
    
    await patient.save()
    console.log("sucesso")
    //return response.route('vaccineController.upVaccine' , {vaccine_id: request.input('laboratories')})

  }
}

module.exports = PatientController
