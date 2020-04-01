export class DALException extends Error {

    static errorNumbers = {
        UNKNOWN: 0, // Not mapped to MySQL Errno
        REF_ER: 1, // MySQL Errno 1451
        NULL_ER: 2, // MySQL Errno 1048
        DATETIME_FORMAT_ER: 3, // MySQL Errno 1292
        DATATYPE_ER: 4 // MySQL Errno 1265
    }

    private _errno: number

    constructor(errno: number) {
        super()
        this._errno = errno
    }

    getErrno = () => {return this._errno}
}