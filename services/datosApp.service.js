import DatosApp from '../models/datosApp.model.js'

class datosAppServices {
    getDatosApp() {
        return DatosApp.findAll({})
    }
    // async newPartido(object) {
    //     const { fecha, local, visitante } = object
    //     const fechas = await Partido.findAll({
    //         where: { fecha }
    //     })
    //     //Al tener la cantidad de partidos por fecha -> if(fechas < x'partidos')
    //     if (fechas) {
    //         const newPartido = Partido.build({
    //             fecha,
    //             local,
    //             visitante
    //         })
    //         await newPartido.save()
    //     } else {
    //         return { Fecha: `La fecha ${fecha} ya esta Cargada` }
    //     }
    // }
}

export default datosAppServices
