/* NPM */
import MySQL from "../db";
import { DALException } from "../DALException";
import { errorHandler } from "../DALErrorHandler";

export const selectAll = async (): Promise<any> => {
  const dbHandler = MySQL();
  const query = "SELECT * FROM Position";

  try {
    const response: any = await dbHandler.query(query);
    return response;
  } catch (e) {
    throw new DALException(
      DALException.errorNumbers.UNKNOWN,
      DALException.errorStrings.UNKNOWN
    );
  } finally {
    dbHandler.close();
  }
};

export const selectBySessionId = async (sessionId: number): Promise<any> => {
  const dbHandler = MySQL()
  const query = "SELECT * FROM Position WHERE sessionId=?"
  const values = [sessionId]

  try {
    const response: any = await dbHandler.query(query, values)
    return response
  } catch (e) {
    throw new DALException(
      DALException.errorNumbers.UNKNOWN,
      DALException.errorStrings.UNKNOWN
    );
  } finally {
    dbHandler.close();
  }
}

export const insert = async (data: any): Promise<any> => {
  const dbHandler = MySQL();
  const query: string =
    "INSERT INTO `Position` (sessionId, x, y, read_at, created_at, rotation) VALUES (?, ?, ?, ?, NOW(), ?)";
  const values: any[] = [
    data.sessionId,
    data.x,
    data.y,
    data.read_at,
    data.rotation,
  ];

  try {
    const response: any = await dbHandler.query(query, values);
    return response.insertId;
  } catch (e) {
    console.log(e)
    throw errorHandler(e.errno);
  } finally {
    dbHandler.close();
  }
};

export const exists = async (id: number): Promise<boolean | void> => {
  const dbHandler = MySQL();
  const query = "SELECT EXISTS (SELECT 1 FROM `Position` WHERE id = ?)";
  const values = [id];

  try {
    const response: any = await dbHandler.query(query, values);
    return Object.values(response[0])[0] === 1 ? true : false;
  } catch (e) {
    throw errorHandler(e.errno);
  } finally {
    dbHandler.close()
  }
};
