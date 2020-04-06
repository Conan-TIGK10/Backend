# Validator

## const xValidator(dataX: any)

**Description** : Validates if dataX is a number  
### Use:
```typescript
  xValidator(dataX);
```

### Errors:

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:
* `BLLException.errorNumbers.NUMBER_ER`
* `BLLEXception.message = "X value"`

## const yValidator(dataY: any)

**Description** : Validates if dataY is a number  
### Use:
```typescript
  yValidator(dataY);
```

### Errors:

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:
* `BLLException.errorNumbers.NUMBER_ER`
* `BLLEXception.message = "Y value"`

## const xValidator(dataString: any)

**Description** : Validates if dataString is a string 
### Use:
```typescript
  stringValidator(dataString);
```

### Errors:

**Possible error types** : 
* [`BLLException`](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)

**Possible error values**:
* `BLLException.errorNumbers.STRING_ER`
* `BLLEXception.message = "Date value"`
