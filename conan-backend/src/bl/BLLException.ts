export class BLLException extends Error {
  static errorNumbers = {
    DATABASE_ER: 0, // Error in the database
    NUMBER_ER: 1, // Not a valid number value
    STRING_ER: 2, // Not a valid string value
    DATETIME_ER: 3, // Not a valid datetime format
    UNKNOWN_ER: 4 // Error not defined
  };

  static errorStrings = {
    DATABASE_ER: "Database error", // Error in the database
    NUMBER_ER: "Value was not a number", // Not a valid number value
    STRING_ER: "Value was not a string", // Not a valid string value
    DATETIME_ER: "Date format was invalid", // Not a valid date format
    UNKNOWN_ER: "Unknown error" // Error unknown
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
