/* Import from Data-Access-Layer */
import * as positionRepo from "../../dal/repos/positionRepo";
import * as sessionRepo from '../../dal/repos/sessionRepo'
import * as validator from "../validators/validator";
import { BLLException } from "../BLLException";
import { DALException } from "../../dal/DALException";

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
      BLLException.errorStrings.DATABASE_ER
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
    validator.stringValidator(data.read_at);

    let sessionExists = await sessionRepo.exists(data.sessionId)
    if(!sessionExists)
      throw new BLLException(BLLException.errorNumbers.REFERENCE_ER, BLLException.errorStrings.REFERENCE_ER)
    validator.numberValidator(data.sessionId)

    data.x = parseFloat(data.x);
    data.y = parseFloat(data.y);

    let insertId: any = await positionRepo.insert(data);
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
        case BLLException.errorNumbers.NUMBER_ER:
          errMessage = BLLException.errorStrings.NUMBER_ER;
          break;
        case BLLException.errorNumbers.STRING_ER:
          errMessage = BLLException.errorStrings.STRING_ER;
          break;
        case BLLException.errorNumbers.REFERENCE_ER:
          errMessage = BLLException.errorStrings.REFERENCE_ER
          break;
        default:
          errMessage = BLLException.errorStrings.UNKNOWN_ER;
          break;
      }
    } else if (error.name === "DALException") {
      switch (errno) {
        case DALException.errorNumbers.DATETIME_FORMAT_ER:
          errMessage = BLLException.errorStrings.DATETIME_ER;
          errno = BLLException.errorNumbers.DATETIME_ER;
          break;
        case DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER:
          errMessage = BLLException.errorStrings.REFERENCE_ER
          errno = BLLException.errorNumbers.REFERENCE_ER
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
        BLLException.errorStrings.NUMBER_ER
      );
    } else {
      throw new BLLException(
        BLLException.errorNumbers.DATABASE_ER,
        BLLException.errorStrings.DATABASE_ER
      );
    }
  }
};
