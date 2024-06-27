import Registro from '../models/registro_Com.model.js'

class registroService {
    getRegistro() {
        return Registro.findAll({})
    }
    // getPartidoFecha(fecha) {
    //     return Partido.findAll({ where: fecha })
    // }
    async newRegistro(object) {
        const newRegistro = Registro.build(object)
        await newRegistro.save()
    }
    async deleteRegistro(id) {
        const existeID = await Registro.findOne({ where: id })
        if (existeID) {
            await Registro.destroy({ where: id })
            return 'Registro fue eliminado'
        } else {
            return json({ error: 'No existe el id' })
        }
    }
    async updateRegistro(id, object) {
        const findUser = await Registro.findOne({ where: id })
        if (findUser) {
            await Registro.update(object, { where: id })
            return Registro.findByPk(id.id)
        } else {
            return json('No existe el Registro')
        }
    }
}

export default registroService
