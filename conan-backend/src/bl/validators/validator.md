# Validator

## const xValidator(dataX: any)

**Description** : Validates if dataX is a number

### Use:

```typescript
xValidator(dataX);
```

### Errors:

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:

- `BLLException.errorNumbers.NUMBER_ER`
- `BLLException.message = "X value"`
- `BLLException.errorStatusCodes.NUMBER_ER`

## const yValidator(dataY: any)

**Description** : Validates if dataY is a number

### Use:

```typescript
yValidator(dataY);
```

### Errors:

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:

- `BLLException.errorNumbers.NUMBER_ER`
- `BLLEXception.message = "Y value"`
- `BLLException.errorStatusCodes.NUMBER_ER`

## const xValidator(dataString: any)

**Description** : Validates if dataString is a string

### Use:

```typescript
stringValidator(dataString);
```

### Errors:

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:

- `BLLException.errorNumbers.STRING_ER`
- `BLLEXception.message = "Date value"`
- `BLLException.errorStatusCodes.STRING_ER`

## const numberValidator(data: any)

**Description** : Validates if dataString is a number

### Use:

```typescript
numberValidator(dataString);
```

### Errors:

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:

- `BLLException.errorNumbers.NUMBER_ER`
- `BLLEXception.message = "Number value"`
- `BLLException.errorStatusCodes.NUMBER_ER`

## const sizeValidator(dataString: any)

**Description** : Validates if dataString is between 2 and 20 in size

### Use:

```typescript
sizeValidator(dataString);
```

### Errors:

**Possible error types** :

- [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:

- `BLLException.errorNumbers.SIZE_ER`
- `BLLEXception.message = "Size too big"`
- `BLLEXception.message = "Size too small"`
- `BLLException.errorStatusCodes.SIZE_ER`
