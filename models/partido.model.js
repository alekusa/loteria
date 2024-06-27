import { DataTypes } from 'sequelize'
import db_Conect from '../db/sqlite.js'

const Partido = db_Conect.define('Partido', {
    fecha: {
        type: DataTypes.INTEGER
    },
    local: {
        type: DataTypes.STRING
    },
    visitante: {
        type: DataTypes.STRING
    },
    gol_local: {
        type: DataTypes.INTEGER
    },
    gol_visitante: {
        type: DataTypes.INTEGER
    },
    estadio: {
        type: DataTypes.STRING
    },
    arbitro: {
        type: DataTypes.STRING
    }
})
export default Partido
