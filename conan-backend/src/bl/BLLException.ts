export class BLLException extends Error {
  static errorNumbers = {
    DATABASE_ER: 0, // Error in the database
    NUMBER_ER: 1, // Not a valid number value
    STRING_ER: 2 // Not a valid string value
  };

  static errorStrings = {
    DATABASE_ER: "Database error", // Error in the database
    NUMBER_ER: "Value was not a number", // Not a valid number value
    STRING_ER: "Value was not a string" // Not a valid string value
  };

  private _errno: number;

  constructor(errno: number) {
    super();
    this._errno = errno;
  }

  getErrno = () => {
    return this._errno;
  };
}
