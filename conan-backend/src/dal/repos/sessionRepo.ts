/* NPM */
import MySQL from '../db'
import { DALException } from '../DALException'

export const selectAll = async (): Promise<any> => {

    const dbHandler = MySQL()
    const query = "SELECT * FROM `Session`"
    
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
    const query: string = "INSERT INTO `Session` (name, created_at) VALUES (?, NOW())"
    const values: any[] = [data.name]
    
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
    const query = "SELECT EXISTS (SELECT 1 FROM `Session` WHERE id = ?)"
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