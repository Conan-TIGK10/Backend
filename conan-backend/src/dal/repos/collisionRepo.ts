/* NPM */
import MySQL from "../db";
import { errorHandler } from "../DALErrorHandler";
import { DALException } from "../DALException";

export const selectAll = async (): Promise<any | void> => {
  const dbHandler = MySQL();
  const query = "SELECT * FROM Collision";

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

export const insert = async (data: any): Promise<any> => {
  const dbHandler = MySQL();
  const query: string = "INSERT INTO `Collision` (positionId) VALUES (?)";
  const values: any[] = [data.positionId];

  try {
    const response: any = await dbHandler.query(query, values);
    return response.insertId;
  } catch (e) {
    throw errorHandler(e.errno);
  } finally {
    dbHandler.close();
  }
};
