import { BLLException } from "../BLLException";

/*Validate data to be a number*/
export const xValidator = (dataX: any) => {
  if (!isNaN(dataX)) {
    return true;
  } else {
    throw new BLLException(
      BLLException.errorNumbers.NUMBER_ER,
      "X value",
      BLLException.errorStatusCode.NUMBER_ER
    );
  }
};

/*Validate data to be a number*/
export const yValidator = (dataY: any) => {
  if (!isNaN(dataY)) {
    return true;
  } else {
    throw new BLLException(
      BLLException.errorNumbers.NUMBER_ER,
      "Y value",
      BLLException.errorStatusCode.NUMBER_ER
    );
  }
};

/*Validate data to be a string*/
export const stringValidator = (dataString: any) => {
  if (typeof dataString === "string") {
    return true;
  } else {
    throw new BLLException(
      BLLException.errorNumbers.STRING_ER,
      "Date value",
      BLLException.errorStatusCode.STRING_ER
    );
  }
};

/*Validate data to be a number*/
export const numberValidator = (data: any) => {
  if (!isNaN(data)) {
    return true;
  } else {
    throw new BLLException(
      BLLException.errorNumbers.NUMBER_ER,
      "Number value",
      BLLException.errorStatusCode.NUMBER_ER
    );
  }
};

/*Validate the size of the string*/
export const sizeValidator = (dataString: any) => {
  if (2 < dataString.length) {
    if (dataString.length < 20) {
      return true;
    } else {
      throw new BLLException(
        BLLException.errorNumbers.SIZE_ER,
        "Size too big",
        BLLException.errorStatusCode.SIZE_ER
      );
    }
  } else {
    throw new BLLException(
      BLLException.errorNumbers.SIZE_ER,
      "Size too small",
      BLLException.errorStatusCode.SIZE_ER
    );
  }
};
