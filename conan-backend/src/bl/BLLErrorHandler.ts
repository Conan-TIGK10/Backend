import { BLLException } from "./BLLException";
import { DALException } from "../dal/DALException";

export const errorHandler = (error: BLLException | DALException) => {
  let errMessage: string;
  let errno: number;
  let errStatusCode: number;
  errno = error.getErrno();

  if (error.name === "BLLException") {
    switch (errno) {
      case BLLException.errorNumbers.DATABASE_ER:
        errMessage = BLLException.errorStrings.DATABASE_ER;
        errStatusCode = BLLException.errorStatusCode.DATABASE_ER;
        break;
      case BLLException.errorNumbers.NUMBER_ER:
        errMessage = BLLException.errorStrings.NUMBER_ER;
        errStatusCode = BLLException.errorStatusCode.NUMBER_ER;
        break;
      case BLLException.errorNumbers.STRING_ER:
        errMessage = BLLException.errorStrings.STRING_ER;
        errStatusCode = BLLException.errorStatusCode.STRING_ER;
        break;
      case BLLException.errorNumbers.SIZE_ER:
        errMessage = BLLException.errorStrings.SIZE_ER;
        errStatusCode = BLLException.errorStatusCode.SIZE_ER;
        break;
      case BLLException.errorNumbers.REFERENCE_ER:
        errMessage = BLLException.errorStrings.REFERENCE_ER;
        errStatusCode = BLLException.errorStatusCode.REFERENCE_ER;
        break;
      default:
        errMessage = BLLException.errorStrings.UNKNOWN_ER;
        errStatusCode = BLLException.errorStatusCode.UNKNOWN_ER;
        break;
    }
  } else if (error.name === "DALException") {
    switch (errno) {
      case DALException.errorNumbers.DATETIME_FORMAT_ER:
        errno = BLLException.errorNumbers.DATETIME_ER;
        errMessage = BLLException.errorStrings.DATETIME_ER;
        errStatusCode = BLLException.errorStatusCode.DATETIME_ER;
        break;
      case DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER:
        errno = BLLException.errorNumbers.REFERENCE_ER;
        errMessage = BLLException.errorStrings.REFERENCE_ER;
        errStatusCode = BLLException.errorStatusCode.REFERENCE_ER;
      default:
        errno = BLLException.errorNumbers.UNKNOWN_ER;
        errMessage = BLLException.errorStrings.UNKNOWN_ER;
        errStatusCode = BLLException.errorStatusCode.UNKNOWN_ER;
        break;
    }
  } else {
    errno = BLLException.errorNumbers.UNKNOWN_ER;
    errMessage = BLLException.errorStrings.UNKNOWN_ER;
    errStatusCode = BLLException.errorStatusCode.UNKNOWN_ER;
  }

  return new BLLException(errno, errMessage, errStatusCode);
};
