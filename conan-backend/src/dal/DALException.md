# Class DALException extends Error

**Description**: Error class that is extended which we use for handling errors 

**errorNumbers**:

```javascript
  static errorNumbers = {
        UNKNOWN: 0, // Not mapped to MySQL Errno
        REF_ER: 1, // MySQL Errno 1451
        NULL_ER: 2, // MySQL Errno 1048
        DATETIME_FORMAT_ER: 3, // MySQL Errno 1292
        DATATYPE_ER: 4 // MySQL Errno 1265
  }
```
**constructor**:

```typescript
  constructor(errno: number, message: string) {
    super();
    this._errno = errno;
    this.name = "DALException";
    this.message = message;
  }
```

## Usage example ##

```typescript
  throw DALException(DALException.errorNumbers.REF_ER, "message");
```
