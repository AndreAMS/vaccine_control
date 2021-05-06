'use strict'
const Patient = use('App/Models/Patient')
const Vaccine = use('App/Models/Vaccine')
const Database = use('Database')
class PatientController {
  async home({view}){
  
    const patients = await Patient.all();
    const age65to69 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  65 AND 69 and patients.tipo in ("I", "D")')
    const age70to74 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  70 AND 74 and patients.tipo in ("I", "D")')
    const age75to79 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  75 AND 79 and patients.tipo in ("I", "D")')
    const age60to64 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  60 AND 64 and patients.tipo in ("I", "D")')
    const age80to84 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  80 AND 84 and patients.tipo in ("I", "D")')
    const age85to89 = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  85 AND 89 and patients.tipo in ("I", "D")')
    const age90more = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  90 AND 150 and patients.tipo in ("I", "D")')
    const healthProfessionals = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE patients.tipo="P"')
    const securityProfessionals = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE patients.tipo="F"')
    const teachers = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE patients.tipo="T"')
    const comorbidity = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE patients.tipo="C"')
    
    const age60to64List = JSON.parse(JSON.stringify(age60to64))
    const age65to69List = JSON.parse(JSON.stringify(age65to69))
    const age70to74List = JSON.parse(JSON.stringify(age70to74))
    const age75to79List = JSON.parse(JSON.stringify(age75to79))
    const age80to84List = JSON.parse(JSON.stringify(age80to84))
    const age85to89List = JSON.parse(JSON.stringify(age85to89))
    const age90List = JSON.parse(JSON.stringify(age90more))
    const healthProfessionalsList = JSON.parse(JSON.stringify(healthProfessionals))
    const securityProfessionalsList = JSON.parse(JSON.stringify(securityProfessionals))
    const teachersList = JSON.parse(JSON.stringify(teachers))
    const comorbidityList = JSON.parse(JSON.stringify(comorbidity))

    return view.render('/patients/show', {
      patients: patients.toJSON(),
      age60to64 : age60to64List[0],
      age65to69 : age65to69List[0],
      age70to74 : age70to74List[0],
      age75to79 : age75to79List[0],
      age80to84 : age80to84List[0],
      age85to89 : age85to89List[0],
      age90 : age90List[0],
      healthProfessionals : healthProfessionalsList[0],
      securityProfessionals : securityProfessionalsList[0],
      teachers : teachersList[0],
      comorbidity : comorbidityList[0]

    });
  }

  async dashboard({view}){
    const waiting2DoseList = await Database.raw('SELECT patients.id, patients.nome, patients.tipo, patients.tipo_descricao, patients.celular, patients.aplicador, patients.aplicador2, DATE_FORMAT(patients.data_nascimento,"%d/%m/%Y") as data_nascimento, patients.documento, patients.endereco, DATE_FORMAT(patients.data_dose1,"%d/%m/%Y") as data_dose1,  DATE_FORMAT(patients.data_dose2,"%d/%m/%Y") as data_dose2,  DATE_FORMAT(patients.data_previsao_2_dose,"%d/%m/%Y") as data_previsao_2_dose, patients.lote_dose_1, patients.lote_dose_2 FROM patients WHERE patients.lote_dose_2 IS NULL')
    const total = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients')
    const totalDose1 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.lote_dose_1 IS not NULL')
    const waiting2Dose = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.lote_dose_2 IS NULL')
    const totalImmunized = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.lote_dose_2 IS not NULL')
    const age90more = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  90 AND 150 and patients.tipo = "I"')
    const age85to89 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  85 AND 89 and patients.tipo = "I"')
    const age80to84 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  80 AND 84 and patients.tipo = "I"')
    const age75to79 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  75 AND 79 and patients.tipo = "I"')
    const age70to74 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  70 AND 74 and patients.tipo = "I"')
    const age65to69 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  65 AND 66 and patients.tipo = "I"')
    const age60to64 = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE TIMESTAMPDIFF(YEAR,patients.data_nascimento,patients.data_dose1) BETWEEN  60 AND 64 and patients.tipo = "I"')
    const healthProfessionals = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.tipo = "P"')
    const securityProfessionals = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.tipo = "F"')
    const age = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.tipo = "I"')
    const deficient = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.tipo = "D"')
    const deceased = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.lote_dose_2 = "F"')
    const refused = await Database.raw('SELECT COUNT(patients.id) as qtd FROM patients WHERE patients.lote_dose_1 = "R"')
    
    const listWaiting2Dose = JSON.parse(JSON.stringify(waiting2DoseList))
    //console.log(listWaiting2Dose)
    const totalCount = JSON.parse(JSON.stringify(total))
    const totalDose1Count = JSON.parse(JSON.stringify(totalDose1))
    const waiting2DoseCount = JSON.parse(JSON.stringify(waiting2Dose))
    const totalImmunizedCount = JSON.parse(JSON.stringify(totalImmunized))
    const age60to64Count = JSON.parse(JSON.stringify(age60to64))
    const age65to69Count = JSON.parse(JSON.stringify(age65to69))
    const age70to74Count = JSON.parse(JSON.stringify(age70to74))
    const age75to79Count = JSON.parse(JSON.stringify(age75to79))
    const age80to84Count = JSON.parse(JSON.stringify(age80to84))
    const age85to89Count = JSON.parse(JSON.stringify(age85to89))
    const age90Count = JSON.parse(JSON.stringify(age90more))
    const healthProfessionalsCount = JSON.parse(JSON.stringify(healthProfessionals))
    const securityProfessionalsCount = JSON.parse(JSON.stringify(securityProfessionals))
    const ageCount = JSON.parse(JSON.stringify(age))
    const deficientCount = JSON.parse(JSON.stringify(deficient))
    const deceasedCont = JSON.parse(JSON.stringify(deceased))
    const refusedCount = JSON.parse(JSON.stringify(refused))
    //console.log(age60to64List[0])
    return view.render('/index',{
      waiting2DoseList : listWaiting2Dose[0],
      total : totalCount[0],
      totalDose1 : totalDose1Count[0],
      waiting2Dose : waiting2DoseCount[0],
      totalImmunized : totalImmunizedCount[0],
      age60to64 : age60to64Count[0],
      age65to69 : age65to69Count[0],
      age70to74 : age70to74Count[0],
      age75to79 : age75to79Count[0],
      age80to84 : age80to84Count[0],
      age85to89 : age85to89Count[0],
      age90 : age90Count[0],
      healthProfessionals : healthProfessionalsCount[0],
      securityProfessionals : securityProfessionalsCount[0],
      age : ageCount[0],
      deficient : deficientCount[0],
      refused : refusedCount[0],
      deceased : deceasedCont[0],
      
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
