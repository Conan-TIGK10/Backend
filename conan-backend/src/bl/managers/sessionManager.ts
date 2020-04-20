/* Import from Data-Access-Layer */
import * as sessionRepo from "../../dal/repos/sessionRepo";
import * as validator from "../validators/validator";
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
    let errMessage: string;
    let errno: number;
    errno = error._errno;

    if (error.name === "BLLException") {
      switch (errno) {
        case BLLException.errorNumbers.DATABASE_ER:
          errMessage = BLLException.errorStrings.DATABASE_ER;
          break;
        case BLLException.errorNumbers.STRING_ER:
          errMessage = BLLException.errorStrings.STRING_ER;
          break;
        case BLLException.errorNumbers.SIZE_ER:
          errMessage = BLLException.errorStrings.SIZE_ER;
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
