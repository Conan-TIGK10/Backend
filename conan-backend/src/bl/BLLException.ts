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
    REFERENCE_ER: "Reference id (foreign key) does not exist.", // No id matches the reference id provided
  };

  private _errno: number;

  constructor(errno: number, message: string) {
    super();
    this._errno = errno;
    this.name = "BLLException";
    this.message = message;
  }

  getErrno = () => {
    return this._errno;
  };
}
