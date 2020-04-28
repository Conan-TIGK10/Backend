/* Import from Data-Access-Layer */
import * as sessionRepo from "../../dal/repos/sessionRepo";
import * as validator from "../validators/validator";

import { errorHandler } from "../BLLErrorHandler";

import { BLLException } from "../BLLException";

/*
Call the select all function in the sessionRepo
Sends back error message if thrown
*/
export const selectAll = async () => {
  try {
    const sessions = await sessionRepo.selectAll();
    return sessions;
  } catch (error) {
    throw new BLLException(
      BLLException.errorNumbers.DATABASE_ER,
      BLLException.errorStrings.DATABASE_ER,
      BLLException.errorStatusCode.DATABASE_ER
    );
  }
};

/*
Validate data and call the insert function in the sessionRepo
Sends back error message if validation error
*/
export const insert = async (data: any) => {
  try {
    validator.stringValidator(data.name);
    validator.sizeValidator(data.name);

    let insertId: any = await sessionRepo.insert(data);
    return insertId;
  } catch (error) {
    throw errorHandler(error);
  }
};
