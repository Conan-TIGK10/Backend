# Position Repo

## `async selectAll(): Promise<any>`

**Description** : Selects all positions instances from the MySQL database and returns an array.
### Use:
```typescript
const positionArray: any = await selectAll()
```

### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`

## `async selectBySessionId(): Promise<any>`

**Description** : Selects all positions instances from the MySQL where the id matches in the database and returns an array.
### Use:
```typescript
const positionArray: any = await selectBySessionId(id)
```

### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`
* `DALExepction.errorStrings.UNKNOWN`

## `async insert(data: any): Promise<number>`

**Description** : Inserts a position instance into the MySQL database and returns an insert id.
### Use:
```typescript
const insertId: number = await insert(data)
```
### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.NULL_ER`
* `DALException.errorNumbers.DATATYPE_ER`
* `DALException.errorNumbers.DATETIME_FORMAT_ER`
* `DALException.errorNumbers.UNKNOWN`

## `async exists(id: number): Promise<boolean | void>`

**Description** : Checks if a position instance with the given id exists in the database. Returns a boolean.
### Use:
```typescript
const doesExist: boolean | any = await exists(1)
```
### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`
