# BLL Error Handler

## `errorHandler(error: BLLException | DALException): BLLException`

**Description** : Takes an error and returns a BLLException

### Use:

```typescript
throw errorHandler(error);
```

### Errors

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`
- `BLLException.errorNumbers.NUMBER_ER`
- `BLLException.errorNumbers.STRING_ER`
- `BLLException.errorNumbers.SIZE_ER`
- `BLLException.errorNumbers.REFERENCE_ER`
- `BLLException.errorNumbers.UNKNOWN_ER`
- `BLLException.errorNumbers.DATETIME_ER`

**Possible status codes**:

- `BLLException.errorStatusCodes.DATABASE_ER`
- `BLLException.errorStatusCodes.NUMBER_ER`
- `BLLException.errorStatusCodes.STRING_ER`
- `BLLException.errorStatusCodes.SIZE_ER`
- `BLLException.errorStatusCodes.REFERENCE_ER`
- `BLLException.errorStatusCodes.UNKNOWN_ER`
- `BLLException.errorStatusCodes.DATETIME_ER`
