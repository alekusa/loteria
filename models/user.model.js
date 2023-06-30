import { DataTypes } from 'sequelize'
import db_Conect from '../db/sqlite.js'

const User = db_Conect.define('User', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                msg: 'Debe ingresar un Email, correcto'
            }
        }
    },
    role: {
        type: DataTypes.STRING
    },
    puntos: {
        type: DataTypes.INTEGER
    }
})

export default User
