/* Import from Data-Access-Layer */
import * as positionRepo from "../../dal/repos/positionRepo";
import * as sessionRepo from "../../dal/repos/sessionRepo";

import * as validator from "../validators/validator";
import { errorHandler } from "../BLLErrorHandler";

import { BLLException } from "../BLLException";

/*
Call the select all function in the postitionRepo
Sends back error message if thrown
*/
export const selectAll = async () => {
  try {
    const positions = await positionRepo.selectAll();
    return positions;
  } catch (error) {
    throw new BLLException(
      BLLException.errorNumbers.DATABASE_ER,
      BLLException.errorStrings.DATABASE_ER,
      BLLException.errorStatusCodes.DATABASE_ER
    );
  }
};

/*
Validate data and call the insert function in the postitionRepo
Sends back error message if validation error
*/
export const insert = async (data: any) => {
  try {
    validator.xValidator(data.x);
    validator.yValidator(data.y);
    validator.numberValidator(data.rotation);
    validator.stringValidator(data.read_at);

    let sessionExists = await sessionRepo.exists(data.sessionId);
    if (!sessionExists)
      throw new BLLException(
        BLLException.errorNumbers.REFERENCE_ER,
        BLLException.errorStrings.REFERENCE_ER,
        BLLException.errorStatusCodes.REFERENCE_ER
      );
    validator.numberValidator(data.sessionId);

    data.x = parseFloat(data.x);
    data.y = parseFloat(data.y);
    data.rotation = parseInt(data.rotation);

    let insertId: any = await positionRepo.insert(data);
    return insertId;
  } catch (error) {
    console.log(error)
    throw errorHandler(error);
  }
};

/*
Validate data and call the exists function in the postitionRepo
Sends back error message if validation error
*/

export const exists = async (id: any) => {
  try {
    validator.numberValidator(id);

    let positionId: number = id;
    const existing = await positionRepo.exists(positionId);
    return existing;
  } catch (error) {
    if (error._errno == BLLException.errorNumbers.NUMBER_ER) {
      throw new BLLException(
        BLLException.errorNumbers.NUMBER_ER,
        BLLException.errorStrings.NUMBER_ER,
        BLLException.errorStatusCodes.NUMBER_ER
      );
    } else {
      throw new BLLException(
        BLLException.errorNumbers.DATABASE_ER,
        BLLException.errorStrings.DATABASE_ER,
        BLLException.errorStatusCodes.DATABASE_ER
      );
    }
  }
};
