import User from '../models/user.model.js'
import Partido from '../models/partido.model.js'
import Registro from '../models/registro_Com.model.js'
import DatosApp from '../models/datosApp.model.js'
import db_Conect from '../db/sqlite.js'
import serviceEncryption from '../services/encryption.service.js'
import { NEW_INSTALL } from './config.js'
const servCrypt = new serviceEncryption()
const cargarDatosUser = async () => {
    if (NEW_INSTALL === 'true') {
        await db_Conect.sync({ force: true })
        await User.bulkCreate([
            {
                username: 'Alexis Kuseman',
                password: await servCrypt.encryptPassword('password'),
                email: 'alekusa@gmail.com',
                role: 'admin',
                puntos: 5
            },
            {
                username: 'Jose pequerman',
                password: await servCrypt.encryptPassword('password'),
                email: 'josePequerman@gmail.com',
                role: 'user',
                puntos: 5
            },
            {
                username: 'David Aliases',
                password: await servCrypt.encryptPassword('password'),
                email: 'davidaliaces@gmail.com',
                role: 'user',
                puntos: 5
            },
            {
                username: 'Mario Estefano',
                password: await servCrypt.encryptPassword('password'),
                email: 'marioestefano@gmail.com',
                role: 'user',
                puntos: 5
            },
            {
                username: 'Rojelio Gonzalez',
                password: await servCrypt.encryptPassword('password'),
                email: 'rojeliogonzalez@gmail.com',
                role: 'user',
                puntos: 5
            }
        ])
        await Partido.bulkCreate([
            {
                fecha: 1,
                local: 'Boca',
                visitante: 'River'
            },
            {
                fecha: 2,
                local: 'Belgrano',
                visitante: 'Talleres'
            },
            {
                fecha: 3,
                local: 'San Lorenzo',
                visitante: 'Independiente'
            }
        ])
        await Registro.bulkCreate([
            {
                frecuencia: 1,
                DE: 'LTA',
                Areceptor: 'LTJ',
                hora: '',
                intercambio: 'KUS / HO',
                observaciones: 'QSO QRU',
                dia: '',
                prioridad: ''
            }
        ])
        await DatosApp.bulkCreate([
            {
                cant_Fechas: 3,
                fecha_Actual: 2
            }
        ])
        return
    }
}
export default cargarDatosUser
