import datosAppServices from '../services/datosApp.service.js'
import DatosApp from '../models/datosApp.model.js'
const serv = new datosAppServices()

export const getDatosApp = async (req, res) => {
    try {
        res.json({ datosapp: await DatosApp.findAll() })
        //DatosApp.findAll()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
