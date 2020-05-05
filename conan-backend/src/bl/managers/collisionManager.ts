/* Import from Data-Access-Layer */
import * as collisionRepo from "../../dal/repos/collisionRepo";
import * as positionManager from "../managers/positionManager";

import { errorHandler } from "../BLLErrorHandler";

import { BLLException } from "../BLLException";

/*
Call the select all function in the collisionRepo
Sends back error message if thrown
*/
export const selectAll = async () => {
  try {
    const positions = await collisionRepo.selectAll();
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
Validate data and call the insert function in the collisionRepo
Sends back error message if validation error
*/
export const insert = async (data: any) => {
  try {
    await positionManager.exists(data.positionId);

    data.positionId = parseFloat(data.positionId);

    const insertId = await collisionRepo.insert(data);

    return insertId;
  } catch (error) {
    throw errorHandler(error);
  }
};
