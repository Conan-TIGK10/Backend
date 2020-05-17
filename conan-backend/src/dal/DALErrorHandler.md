# DAL Error Handler

## `errorHandler(errorNumber: number): DALException`

**Description** : Takes an error number and returns a BLLException

### Use:

```typescript
throw errorHandler(errorNumber);
```

### Errors

**Possible error types** :

- [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:

- `DALException.errorNumbers.UNKNOWN`
- `DALException.errorNumbers.REF_ER`
- `DALException.errorNumbers.NULL_ER`
- `DALException.errorNumbers.DATETIME_FORMAT_ER`
- `DALException.errorNumbers.DATATYPE_ER`
- `DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER`

**Possible string values**:

- `DALException.errorStrings.UNKNOWN`
- `DALException.errorStrings.REF_ER`
- `DALException.errorStrings.NULL_ER`
- `DALException.errorStrings.DATETIME_FORMAT_ER`
- `DALException.errorStrings.DATATYPE_ER`
- `DALException.errorStrings.FOREIGN_KEY_CONSTRAINT_ER`
