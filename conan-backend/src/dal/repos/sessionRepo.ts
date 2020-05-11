/* NPM */
import MySQL from "../db";
import { DALException } from "../DALException";
import { errorHandler } from "../DALErrorHandler";

export const selectAll = async (): Promise<any> => {
  const dbHandler = MySQL();
  const query = "SELECT * FROM `Session`";

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
  const query: string =
    "INSERT INTO `Session` (name, created_at) VALUES (?, NOW())";
  const values: any[] = [data.name];

  try {
    const response: any = await dbHandler.query(query, values);
    return response.insertId;
  } catch (e) {
    throw errorHandler(e.errno);
  } finally {
    dbHandler.close();
  }
};

export const exists = async (id: number): Promise<boolean | void> => {
  const dbHandler = MySQL();
  const query = "SELECT EXISTS (SELECT 1 FROM `Session` WHERE id = ?)";
  const values = [id];

  try {
    const response: any = await dbHandler.query(query, values);
    return Object.values(response[0])[0] === 1 ? true : false;
  } catch (e) {
    let errno: number;
    let message: string;
    switch (e.errno) {
      default:
        errno = DALException.errorNumbers.UNKNOWN;
        message = DALException.errorStrings.UNKNOWN;
        break;
    }

    throw new DALException(errno, message);
  } finally {
    dbHandler.close()
  }
};
