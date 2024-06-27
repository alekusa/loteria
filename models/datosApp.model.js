import { DataTypes } from 'sequelize'
import db_Conect from '../db/sqlite.js'

const DatosApp = db_Conect.define('DatosApp', {
    cant_Fechas: {
        type: DataTypes.INTEGER
    },
    fecha_Actual: {
        type: DataTypes.INTEGER
    }
})
export default DatosApp
