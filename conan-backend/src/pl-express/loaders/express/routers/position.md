# Position Router

## GET `/position`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
   {
        "id": 1,
        "sessionId": 1,
        "x": 111.111111,
        "y": 222.222222,
        "rotation": 50,
        "read_at": 60000,
        "created_at": "2020-05-05T07:50:49.000Z"    
    }
]
```

### Error Response

**Condition** : If unexpected server error.

**Code** : `500 Internal Server Error`

**Content** :

```json
{
    "error": "errorMessage"
}
```
## POST `/position`

**Auth required** : No

**Data constraints**

```json
{
    "x": "[double value with dot separation]",
    "y": "[double value with dot separation]",
    "sessionId": "[int value]",
    "rotation": "[int value]",
    "read_at": "[int value (miliseconds)]"
}
```

**Data example**

```json
{
    "x": "111.111111",
    "y": "222.222222",
    "sessionId": "1",
    "rotation": "50",
    "read_at": "60000"
}
```

## Success Response

**Code** : `200 OK`

**Content** :
```json
{
    "id": 1
}
```

## Error Response

**Condition** : If not valid datatype or not valid datetime format.

**Code** : `500 Internal Server Error`

**Content** :

```json
{
    "error": "errorMessage"
}
```
