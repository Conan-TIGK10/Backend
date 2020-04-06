# Collision Repo

## `async selectAll(): Promise<any>`

**Description** : Selects all collision instances from the MySQL database and returns an array.
### Use:
```typescript
const positionArray: any = await selectAll()
```

### Errors

**Possible error types** : 
* [`DALException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`

## `async insert(data: any): Promise<number>`

**Description** : Inserts a collision instance into the MySQL database and returns an insert id.
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
* `DALException.errorNumbers.FOREIGN_KEY_CONSTRAINT_ER`
* `DALException.errorNumbers.UNKNOWN`
