# Position Repo

## `async selectAll(): Promise<any>`

**Description** : Selects all positions instances from the MySQL database and returns an array.
### Use:
```typescript
const positionArray: any = await selectAll()
```

### Errors

**Possible error types** : 
* `DALException`

**Possible errno values**:
* `DALException.errorNumbers.UNKNOWN`

## `async insert(data: any): Promise<number>`

**Description** : Inserts a position instance into the MySQL database.
### Use:
```typescript
const insertId: number = await insert(data)
```
### Errors

**Possible error types** : 
* `BLLException`

**Possible errno values**:
* `BLLException.errorNumbers.NULL_ER`
* `BLLException.errorNumbers.DATATYPE_ER`
* `BLLException.errorNumbers.DATETIME_FORMAT_ER`
* `BLLException.errorNumbers.UNKNOWN`
