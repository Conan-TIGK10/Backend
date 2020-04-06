import { BLLException } from "../BLLException";

/*Validate data to be a Number*/
export const xValidator = (dataX: any) => {
  if (!isNaN(dataX)) {
    return true;
  } else {
    throw new BLLException(BLLException.errorNumbers.NUMBER_ER, "X value");
  }
};

/*Validate data to be a Number*/
export const yValidator = (dataY: any) => {
  if (!isNaN(dataY)) {
    return true;
  } else {
    throw new BLLException(BLLException.errorNumbers.NUMBER_ER, "Y value");
  }
};

/*Validate data to be a String*/
export const stringValidator = (dataString: any) => {
  if ("string" == typeof dataString) {
    return true;
  } else {
    throw new BLLException(BLLException.errorNumbers.STRING_ER, "Date value");
  }
};

export const numberValidator = (data: any) => {
  if (!isNaN(data)) {
    return true;
  } else {
    throw new BLLException(BLLException.errorNumbers.NUMBER_ER, "Number value");
  }
};
