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
