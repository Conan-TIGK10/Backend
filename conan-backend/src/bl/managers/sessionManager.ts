/* Import from Data-Access-Layer */
import * as sessionRepo from "../../dal/repos/sessionRepo";
import * as positionManager from "../managers/positionManager";
import { BLLException } from "../BLLException";
import { DALException } from "../../dal/DALException";

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
      BLLException.errorStrings.DATABASE_ER
    );
  }
};

/*
Call the select session function in the sessionRepo
Sends back error message if thrown
*/
export const selectSession = async () => {
  try {
    const session = await sessionRepo.selectSession();
    return session;
  } catch (error) {
    throw new BLLException(
      BLLException.errorNumbers.DATABASE_ER,
      BLLException.errorStrings.DATABASE_ER
    );
  }
};

/*
Validate data and call the insert function in the sessionRepo
Sends back error message if validation error
*/
export const insert = async (data: any) => {
  try {
    positionManager.exists(data.sessionId);

    data.sessionId = parseFloat(data.sessionId);

    await sessionRepo.insert(data);
  } catch (error) {
    let errMessage: string;
    let errno: number;
    errno = error._errno;

    if (error.name === "BLLException") {
      switch (errno) {
        case 0:
          errMessage = BLLException.errorStrings.DATABASE_ER;
          break;
        case 1:
          errMessage = BLLException.errorStrings.NUMBER_ER;
          break;
        default:
          errMessage = BLLException.errorStrings.UNKNOWN_ER;
          break;
      }
    } else if (error.name === "DALException") {
      switch (errno) {
        case DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER:
          errMessage = BLLException.errorStrings.NONEXISTING_ER;
          errno = BLLException.errorNumbers.NONEXISTING_ER;
          break;
        default:
          errMessage = BLLException.errorStrings.UNKNOWN_ER;
          errno = BLLException.errorNumbers.UNKNOWN_ER;
          break;
      }
    } else {
      errMessage = BLLException.errorStrings.UNKNOWN_ER;
      errno = BLLException.errorNumbers.UNKNOWN_ER;
    }

    throw new BLLException(errno, errMessage);
  }
};
