export class BLLException extends Error {
  static errorNumbers = {
    DATABASE_ER: 0, // Error in the database
    NUMBER_ER: 1, // Not a valid number value
    STRING_ER: 2, // Not a valid string value
    DATETIME_ER: 3, // Not a valid datetime format
    NONEXISTING_ER: 4, // No position existing for that id
    UNKNOWN_ER: 5, // Error not defined
    SIZE_ER: 6, // Size is not in scope
    REFERENCE_ER: 7, // Error not matching reference
  };

  static errorStrings = {
    DATABASE_ER: "Database error", // Error in the database
    NUMBER_ER: "Value was not a number", // Not a valid number value
    STRING_ER: "Value was not a string", // Not a valid string value
    DATETIME_ER: "Date format was invalid", // Not a valid date format
    NONEXISTING_ER: "No position at that id", // No position existing for that id
    UNKNOWN_ER: "Unknown error", // Error unknown
    SIZE_ER: "Wrong size", // Size is not in scope
    REFERENCE_ER: "Associated session id does not exist", // No id matches the reference id provided
  };

  static errorStatusCode = {
    DATABASE_ER: 500, // Error in the database
    NUMBER_ER: 422, // Not a valid number value
    STRING_ER: 422, // Not a valid string value
    DATETIME_ER: 422, // Not a valid date format
    NONEXISTING_ER: 400, // No position existing for that id
    UNKNOWN_ER: 500, // Error unknown
    SIZE_ER: 400, // Size is not in scope
    REFERENCE_ER: 400, // No id matches the reference id provided
  };

  private _errno: number;
  private _errorStatusCode: number;

  constructor(errno: number, message: string, errorStatusCode: number) {
    super();
    this._errno = errno;
    this.name = "BLLException";
    this.message = message;
    this._errorStatusCode = errorStatusCode;
  }

  getErrno = () => {
    return this._errno;
  };

  getErrorStatusCode = () => {
    return this._errorStatusCode;
  };
}
