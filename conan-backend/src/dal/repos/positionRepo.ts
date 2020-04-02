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
        throw new DALException(DALException.errorNumbers.UNKNOWN)
    } finally {
        dbHandler.close()
    }

}

export const insert = async (data: any): Promise<any> => {
    
    const dbHandler = MySQL()
    const query: string = "INSERT INTO `Position` (x, y, read_at, created_at) VALUES (?, ?, ?, NOW())"
    const values: any[] = [data.x, data.y, data.read_at]
    
    try {
        const response: any = await dbHandler.query(query, values)
        return response.insertId
    } catch(e) {
        let errno: number
        switch (e.errno) {
            case 1048:
                errno = DALException.errorNumbers.NULL_ER
                break
            case 1265:
                errno = DALException.errorNumbers.DATATYPE_ER
                break
            case 1292:
                errno = DALException.errorNumbers.DATETIME_FORMAT_ER
                break
            default:
                errno = DALException.errorNumbers.UNKNOWN
                break;
        }

        throw new DALException(errno)
    } finally {
        dbHandler.close()
    }

}