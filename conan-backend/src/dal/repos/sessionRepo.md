# Session Repo

## `async selectAll(): Promise<any>`

**Description** : Selects all session instances from the MySQL database and returns an array.
### Use:
```typescript
const sessionArray: any = await selectAll()
```

### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`

## `async insert(data: any): Promise<number>`

**Description** : Inserts a session instance into the MySQL database and returns an insert id.
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
* `DALException.errorNumbers.UNKNOWN`

## `async exists(id: number): Promise<boolean | void>`

**Description** : Checks if a session instance with the given id exists in the database. Returns a boolean.
### Use:
```typescript
const doesExist: boolean | any = await exists(1)
```
### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`
