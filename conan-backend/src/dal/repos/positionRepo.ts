/* NPM */
import MySQL from '../db'

export const selectAll = async (): Promise<any> => {

    const dbHandler = MySQL()
    const query = "SELECT * FROM Position"

    try {
        const response: any = await dbHandler.query(query)
        return {
            data: response,
            error: null
        }
    } catch(e) {
        return {
            data: null,
            error: {
                message: e.sqlMessage,
                number: e.errno
            }
        }
    } finally {
        dbHandler.close()
    }

}

export const insert = async (data: any): Promise<any> => {
    console.log(data)
    
    const dbHandler = MySQL()
    const query: string = "INSERT INTO `Position` (x, y, read_at, created_at) VALUES (?, ?, ?, NOW())"
    const values: any[] = [data.x, data.y, data.read_at]
    
    try {
        const response: any = await dbHandler.query(query, values)
        return {
            data: response,
            error: null
        }
    } catch(e) {
        console.log(e)
        return {
            data: null,
            error: {
                message: e.sqlMessage,
                number: e.errno
            }
        }
    }

}