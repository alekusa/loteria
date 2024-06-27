import partidoService from '../services/partido.service.js'
const serv = new partidoService()

export const getPartidos = async (req, res) => {
    try {
        res.status(200).json({ partidos: await serv.getPartidos() })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getPartidoFecha = async (req, res) => {
    try {
        res.status(200).json({
            partido: await serv.getPartidoFecha(req.params)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const newPartido = async (req, res) => {
    try {
        res.status(200).json(await serv.newPartido(req.body))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
