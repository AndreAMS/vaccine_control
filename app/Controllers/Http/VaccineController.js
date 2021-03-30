'use strict'
const Vaccine  = use('App/Models/Vaccine')
const Laboratory  = use('App/Models/Laboratory')
const Database = use('Database')
class VaccineController {

  async home({view}){
    const vaccines = await Vaccine.all()
    const lotes = await Database.raw('select vaccines.lote,  vaccines.quantidade_doses, laboratories.nome, laboratories.nome_vacina from vaccines, laboratories where vaccines.laboratory_id = laboratories.id')
     const lotesList = JSON.parse(JSON.stringify(lotes)) 
    const laboratories = await Laboratory.all()
    return view.render('vaccines/list', {
      vaccines : vaccines.toJSON(),
      laboratories : laboratories.toJSON(),
      lotesList : lotesList[0]
    })

  }

  async store({request, response, session}){
    const vaccine = new Vaccine()
    vaccine.lote = request.input('lote')
    vaccine.data_recebimento = request.input('newDate')
    vaccine.quantidade_doses = request.input('quantidade_doses')
    vaccine.dias_segunda_dose = request.input('segunda_dose')
    vaccine.observacao = request.input('observacao')
    vaccine.laboratory_id = request.input('laboratorio')

    await vaccine.save()

    session.flash({notification: "Novo Lote incluido com sucesso"})
    return response.redirect('/vaccines')
  }
}

module.exports = VaccineController
