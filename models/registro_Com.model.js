import { DECIMAL, DataTypes } from 'sequelize'
import db_Conect from '../db/sqlite.js'

const Registro = db_Conect.define('Registro', {
    frecuencia: {
        type: DataTypes.INTEGER
    },
    DE: {
        type: DataTypes.STRING
    },
    Areceptor: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.STRING
    },
    intercambio: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
    dia: {
        type: DataTypes.STRING
    },
    prioridad: {
        type: DataTypes.STRING
    }
})
export default Registro
