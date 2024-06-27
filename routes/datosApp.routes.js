import { Router } from 'express'
import { getDatosApp } from '../controllers/datosApp.controller.js'

const router = Router()

router.get('/datosapp', getDatosApp)

export default router
