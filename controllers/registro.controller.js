import registroService from '../services/registro.service.js'
const serv = new registroService()

export const getRegistro = async (req, res) => {
    try {
        res.status(200).json(await serv.getRegistro())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const newRegistro = async (req, res) => {
    try {
        res.status(200).json(await serv.newRegistro(req.body))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const DeleteRegistro = async (req, res) => {
    try {
        res.status(200).json(await serv.deleteRegistro(req.params))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const updateRegistro = async (req, res) => {
    try {
        res.status(200).json(await serv.updateRegistro(req.params, req.body))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
