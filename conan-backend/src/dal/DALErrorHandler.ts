import { DALException } from "./DALException";

export const errorHandler = (errorNumber: number) => {
  let errno: number;
  let message: string;

  switch (errorNumber) {
    case 1048:
      errno = DALException.errorNumbers.NULL_ER;
      message = DALException.errorStrings.NULL_ER;
      break;
    case 1265:
      errno = DALException.errorNumbers.DATATYPE_ER;
      message = DALException.errorStrings.DATATYPE_ER;
      break;
    case 1292:
      errno = DALException.errorNumbers.DATETIME_FORMAT_ER;
      message = DALException.errorStrings.DATETIME_FORMAT_ER;
      break;
    case 1452:
      errno = DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER;
      message = DALException.errorStrings.FOREIGN_KEY_CONSTRAINT_ER;
      break;
    default:
      errno = DALException.errorNumbers.UNKNOWN;
      message = DALException.errorStrings.UNKNOWN;
      break;
  }

  return new DALException(errno, message);
};
