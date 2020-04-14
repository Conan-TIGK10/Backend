# Collision Manager

## `async selectAll(): Promise<any>`

**Description** : Selects all collisions anstances and return them in an array.

### Use:

```typescript
const collisionArray: any = await selectAll();
```

### Errors

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`

## `async insert(): Promise<any>`

**Description** : Validates and inserts a collision instance.

### Use:

```typescript
await insert(data);
```

### Errors

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible errno values**:

- `BLLException.errorNumbers.DATABASE_ER`
- `BLLException.errorNumbers.NUMBER_ER`
- `BLLException.errorNumbers.UNKNOWN_ER`
- `BLLException.errorNumbers.NONEXISTING_ER`
