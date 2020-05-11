# Session Manager

## `async selectAll(): Promise<any>`

**Description** : Selects all session instances and return them in an array.

### Use:

```typescript
const sessionArray: any = await selectAll();
```

### Errors

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`

**Possible errorStrings values**:

- `BLLException.errorStrings.DATABASE_ER`

**Possible errorStatusCodes values**:

- `BLLException.errorStatusCodes.DATABASE_ER`

## `async insert(): Promise<any>`

**Description** : Validates and inserts a session instance.

### Use:

```typescript
await insert(data);
```

### Errors

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`
- `BLLException.errorNumbers.STRING_ER`
- `BLLException.errorNumbers.SIZE_ER`
- `BLLException.errorNumbers.UNKNOWN_ER`
- `BLLException.errorNumbers.NONEXISTING_ER`

**Possible errorStrings values**:

- `BLLException.errorStrings.DATABASE_ER`
- `BLLException.errorStrings.STRING_ER`
- `BLLException.errorStrings.SIZE_ER`
- `BLLException.errorStrings.UNKNOWN_ER`
- `BLLException.errorStrings.NONEXISTING_ER`

**Possible errorStatusCodes values**:

- `BLLException.errorStatusCodes.DATABASE_ER`
- `BLLException.errorStatusCodes.STRING_ER`
- `BLLException.errorStatusCodes.SIZE_ER`
- `BLLException.errorStatusCodes.UNKNOWN_ER`
- `BLLException.errorStatusCodes.NONEXISTING_ER`
