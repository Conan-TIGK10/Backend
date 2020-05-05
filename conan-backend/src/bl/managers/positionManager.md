# Position Manager

## `async selectAll(): Promise<any>`

**Description** : Selects all positions instances and returns them in an array.  
### Use:
```typescript
const positionArray: any = await selectAll()
```

### Errors

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:
* `BLLException.errorNumbers.DATABASE_ER`

**Possible errorStrings values**:

- `BLLException.errorStrings.DATABASE_ER`

**Possible errorStatusCodes values**:

- `BLLException.errorStatusCodes.DATABASE_ER`

## `async insert(data: any): Promise<void>`

**Description** : Validates and inserts a position instance.
### Use:
```typescript
await insert(data)
```
### Errors

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:
* `BLLException.errorNumbers.DATABASE_ER`
* `BLLException.errorNumbers.STRING_ER`
* `BLLException.errorNumbers.NUMBER_ER`

**Possible errorStrings values**:

- `BLLException.errorStrings.DATABASE_ER`
- `BLLException.errorStrings.STRING_ER`
- `BLLException.errorStrings.NUMBER_ER`

**Possible errorStatusCodes values**:

- `BLLException.errorStatusCodes.DATABASE_ER`
- `BLLException.errorStatusCodes.STRING_ER`
- `BLLException.errorStatusCodes.NUMBER_ER`

## `async exists(id: any): Promise<boolean | void>`

**Description** : Selects a positions instance on the id and returns true or false.  
### Use:
```typescript
const checkExistance: boolean = await exists(id)
```

### Errors

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`
- `BLLException.errorNumbers.NUMBER_ER`

**Possible errorStrings values**:

- `BLLException.errorStrings.DATABASE_ER`
- `BLLException.errorStrings.NUMBER_ER`

**Possible errorStatusCodes values**:

- `BLLException.errorStatusCodes.DATABASE_ER`
- `BLLException.errorStatusCodes.NUMBER_ER`
