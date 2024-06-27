import { Router } from 'express'
import {
    getRegistro,
    newRegistro,
    DeleteRegistro,
    updateRegistro
} from '../controllers/registro.controller.js'

const router = Router()

router.get('/registro', getRegistro)
router.post('/addRegistro', newRegistro)
router.delete('/deletRegistro/:id', DeleteRegistro)
router.put('/updateRegistro/:id', updateRegistro)

export default router
