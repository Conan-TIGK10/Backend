/* Import from Data-Access-Layer */
import * as positionRepo from "../dal/repos/positionRepo";
import * as validator from "./validator";
import { BLLException } from "./BLLException";

/*
Call the select all function in the postitionReop
Sends back error message if thrown
*/
export const selectAll = async () => {
  try {
    positionRepo.selectAll();
  } catch (e) {
    throw BLLException.errorStrings.DATABASE_ER;
  }
};

/*
Validate data and call the insert function in the postitionReop
Sends back error message if validation error
*/
export const insert = async (data: any) => {
  try {
    validator.xValidator(data.x);
    validator.yValidator(data.y);
    validator.stringValidator(data.read_at);
    positionRepo.insert(data);
  } catch (errno) {
    let errMessage: String;
    switch (errno) {
      case 1:
        errMessage = BLLException.errorStrings.NUMBER_ER;
        break;
      case 2:
        errMessage = BLLException.errorStrings.STRING_ER;
        break;
      default:
        errMessage = BLLException.errorStrings.DATABASE_ER;
        break;
    }
    throw errMessage;
  }
};
