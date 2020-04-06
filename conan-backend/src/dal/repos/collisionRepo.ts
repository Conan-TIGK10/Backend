/* NPM */
import MySQL from '../db'
import { DALException } from '../DALException'

export const selectAll = async (): Promise<any | void> => {

    const dbHandler = MySQL()
    const query = "SELECT * FROM Collision"
    
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
    const query: string = "INSERT INTO `Collision` (positionId) VALUES (?)"
    const values: any[] = [data.positionId]
    
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