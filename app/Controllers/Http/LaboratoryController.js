'use strict'
const Laboratory = use('App/Models/Laboratory') 
class LaboratoryController {
  async home({view}){  
    const laboratories = await Laboratory.all();
    return view.render('vaccines/laboratories', {laboratories: laboratories.toJSON()});
  }

  async store({response, request, session}){
    const laboratory  = new Laboratory()
    laboratory.nome = request.input('nome')
    laboratory.nome_vacina = request.input('nome_vacina')
    await laboratory.save()

    session.flash({notification: "Nova Vacina/Laboratório Incluido com sucesso"})
    return response.redirect('/vaccines/laboratories')

  }
}

module.exports = LaboratoryController
