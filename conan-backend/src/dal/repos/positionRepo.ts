/* NPM */
import MySQL from '../db'
import { DALException } from '../DALException'

export const selectAll = async (): Promise<any> => {

    const dbHandler = MySQL()
    const query = "SELECT * FROM Position"
    
    try {
        const response: any = await dbHandler.query(query)
        return response
    } catch(e) {
        throw new DALException(DALException.errorNumbers.UNKNOWN, DALException.errorStrings.UNKNWON)
    } finally {
        dbHandler.close()
    }

}

export const insert = async (data: any): Promise<any> => {
    
    const dbHandler = MySQL()
    const query: string = "INSERT INTO `Position` (sessionId, x, y, read_at, created_at) VALUES (?, ?, ?, ?, NOW())"
    const values: any[] = [data.sessionId, data.x, data.y, data.read_at]
    
    try {
        const response: any = await dbHandler.query(query, values)
        return response.insertId
    } catch(e) {
        let errno: number
        let message: string
        switch (e.errno) {
            case 1048:
                errno = DALException.errorNumbers.NULL_ER
                message = DALException.errorStrings.NULL_ER
                break
            case 1265:
                errno = DALException.errorNumbers.DATATYPE_ER
                message = DALException.errorStrings.DATATYPE_ER
                break
            case 1292:
                errno = DALException.errorNumbers.DATETIME_FORMAT_ER
                message = DALException.errorStrings.DATETIME_FORMAT_ER
                break
            case 1452:
                errno = DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER
                message = DALException.errorStrings.FOREIGN_KEY_CONSTRAINT_ER
            default:
                errno = DALException.errorNumbers.UNKNOWN
                message = DALException.errorStrings.UNKNWON
                break;
        }

        throw new DALException(errno, message)
    } finally {
        dbHandler.close()
    }

}

export const exists = async (id: number): Promise<boolean | void> => {
    const dbHandler = MySQL()
    const query = "SELECT EXISTS (SELECT 1 FROM `Position` WHERE id = ?)"
    const values = [id]

    try {
        const response: any = await dbHandler.query(query, values)
        console.log(response)
        return Object.values(response[0])[0] === 1 ? true: false
    } catch(e) {
        let errno: number
        let message: string
        switch (e.errno) {
            default:
                errno = DALException.errorNumbers.UNKNOWN
                message = DALException.errorStrings.UNKNWON
                break;
        }

        throw new DALException(errno, message)
    }

}