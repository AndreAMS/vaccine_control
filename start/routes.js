'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('index')
Route.get('/', 'PatientController.dashboard')
Route.get('/patients', 'PatientController.home')
Route.get('/patients/detail/:id', 'PatientController.detail')
Route.on('/login',).render('auth.login');
Route.on('patients/add',).render('patients/create');
Route.post('/patient/new', 'patientController.store')
//Route.on('/vaccines',).render('vaccines/list');
Route.get('/vaccines', 'VaccineController.home')
Route.on('vaccines/add',).render('vaccines/create');
//Route.on('vaccines/laboratories').render('vaccines/laboratories')
Route.get('vaccines/laboratories', 'LaboratoryController.home')
Route.post('laboratory/new', 'laboratoryController.store')
Route.post('vaccine/new', 'vaccineController.store')
Route.get('/vaccines/vaccinate/:patient_id', 'vaccineController.vaccinate')
Route.get('/vaccines/vaccinate2/:patient_id', 'vaccineController.vaccinate2')
Route.put('/vaccines/vaccinate/:patient_id', 'patientController.vaccinate')
Route.put('/vaccines/vaccinate2/:patient_id', 'patientController.vaccinate2')
Route.get('/vaccine/update/:vaccine_id/:lote_id', 'vaccineController.upVaccine')

