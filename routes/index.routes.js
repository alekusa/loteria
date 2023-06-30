import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('Prueva sobre Loteria')
})

export default router
