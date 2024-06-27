import { Router } from 'express'
import {
    getPartidoFecha,
    getPartidos,
    newPartido
} from '../controllers/partido.controller.js'

const router = Router()

router.get('/partidos', getPartidos)
router.get('/partidos/:fecha', getPartidoFecha)
router.post('/newpartido', newPartido)

export default router
