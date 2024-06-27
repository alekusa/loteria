import Partido from '../models/partido.model.js'

class partidoService {
    getPartidos() {
        return Partido.findAll({})
    }
    getPartidoFecha(fecha) {
        return Partido.findAll({ where: fecha })
    }
    async newPartido(object) {
        const { fecha, local, visitante } = object
        const fechas = await Partido.findAll({
            where: { fecha }
        })
        //Al tener la cantidad de partidos por fecha -> if(fechas < x'partidos')
        if (fechas) {
            const newPartido = Partido.build({
                fecha,
                local,
                visitante
            })
            await newPartido.save()
        } else {
            return { Fecha: `La fecha ${fecha} ya esta Cargada` }
        }
    }
    //TODO en un futuro destroy los partidos, para cargar otra fecha
}

export default partidoService
