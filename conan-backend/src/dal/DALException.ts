export class DALException extends Error {

    static errorNumbers = {
        UNKNOWN: 0, // Not mapped to MySQL Errno
        REF_ER: 1, // MySQL Errno 1451
        NULL_ER: 2, // MySQL Errno 1048
        DATETIME_FORMAT_ER: 3, // MySQL Errno 1292
        DATATYPE_ER: 4 // MySQL Errno 1265
    }

    static errorStrings = {
        UNKNWON: "Unknown error.",
        REF_ER: "Instance is referenced in another table.",
        NULL_ER: "Value must not be null.",
        DATETIME_FORMAT_ER: "Date format was invalid.",
        DATATYPE_ER: "Unknown error."
      };

    private _errno: number

    constructor(errno: number, message: string) {
        super()
        this._errno = errno
        this.name = "DALException"
        this.message = message
    }

    getErrno = () => {return this._errno}
}