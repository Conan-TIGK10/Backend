import { BLLException } from "./BLLException";

/*Validate data to be a Number*/
export const xValidator = (dataX: any) => {
  if (dataX == typeof Number) {
    return true;
  } else {
    throw BLLException.errorNumbers.NUMBER_ER;
  }
};

/*Validate data to be a Number*/
export const yValidator = (dataY: any) => {
  if (dataY == typeof Number) {
    return true;
  } else {
    throw BLLException.errorNumbers.NUMBER_ER;
  }
};

/*Validate data to be a String*/
export const stringValidator = (dataString: any) => {
  if (dataString == typeof String) {
    return true;
  } else {
    throw BLLException.errorNumbers.STRING_ER;
  }
};
