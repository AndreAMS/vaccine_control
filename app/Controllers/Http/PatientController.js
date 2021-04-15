'use strict'
const Patient = use('App/Models/Patient')
const Vaccine = use('App/Models/Vaccine')
const Database = use('Database')
class PatientController {
  async home({view}){
  
    const patients = await Patient.all();
    return view.render('/patients/show', {patients: patients.toJSON()});
  }

  async dashboard({view}){
    const age60to64 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  60 AND 64')
    const age60to64List = JSON.parse(JSON.stringify(age60to64))
    console.log(age60to64List[0])
    return view.render('/index',{
      age60to64 : age60to64List[0]
    })
  }

  async store({request, response, session}){
    const patient = new Patient()
    patient.nome = request.input('nome'),
    patient.data_nascimento = request.input('newDate'),
    patient.sexo = request.input('sexo'),
    patient.documento = request.input('documento')

    await patient.save()

    session.flash({notification: "Paciente Incluido com sucesso"})
    return response.route('vaccineController.vaccinate', { patient_id: patient.id })
   // return response.redirect('/patients')
  }

  async vaccinate({params, request, response, session}){
    const patient = await Patient.find(params.patient_id)
    const vaccineId = request.input('vaccineID')
    //const vaccine = Patient.find(params.vaccine_id)
    patient.lote_dose_1 = request.input('laboratories')
    patient.data_dose1 = request.input('newDate')
    patient.data_previsao_2_dose = request.input('newDate2')
    console.log(">>>>>>>>>>>>" + request.input('laboratories'))
    await Database
  .table('vaccines')
  .where('id', vaccineId)
  .decrement('quantidade_doses', 1)
    
    await patient.save()
    //console.log("sucesso")
    session.flash({notification: "Paciente Vacinado com sucesso"})
    return response.route('PatientController.detail', { id: patient.id})

  }

  async vaccinate2({params, request, response, session}){
    const patient = await Patient.find(params.patient_id)
    const vaccineId = request.input('vaccineID')
    //const vaccine = Patient.find(params.vaccine_id)
    patient.lote_dose_2 = request.input('laboratories')
    patient.data_dose2 = request.input('newDate')
    console.log(">>>>>>>>>>>>" + request.input('laboratories'))
    await Database
  .table('vaccines')
  .where('id', vaccineId)
  .decrement('quantidade_doses', 1)
    
    await patient.save()
   //console.log("sucesso")
   session.flash({notification: "Paciente Vacinado com sucesso"})
   return response.route('PatientController.detail', { id: patient.id})

  }

  async detail({params, view}){
    const patient = await Patient.find(params.id)
     
    return view.render('/patients/detail', {
      patient: patient.toJSON()
    })
  }
}

module.exports = PatientController
