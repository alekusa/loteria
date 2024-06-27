import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

import userRoutes from './routes/user.routes.js'
import partidoRoutes from './routes/partido.routes.js'
import datosAppRoutes from './routes/datosApp.routes.js'
import indexRoutes from './routes/index.routes.js'
import registroRoutes from './routes/registro.routes.js'
//* Crea tablas las llena de datos
import cargarDatosUser from './config/configDB.js'
cargarDatosUser()
//*Rutas
app.use(userRoutes, indexRoutes, partidoRoutes, datosAppRoutes, registroRoutes)

export default app
