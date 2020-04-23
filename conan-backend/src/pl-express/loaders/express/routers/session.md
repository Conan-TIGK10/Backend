# Position Router

## GET `/position`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "1",
    "x": "11.111",
    "y": "22.222",
    "sessionId": "1",
    "read_at": "2020-04-03T14:26:50.000Z",
    "created_at": "2020-04-03T12:27:12.000Z"
  }
]
```

### Error Response

**Condition** : If unexpected server error.

**Code** : `500 Internal Server Error`

**Content** :

```json
{
    "error": {
      "_errno":"errorNumber",
      "message":"errorMessage",
      "name": "nameOfException"
    }
}
```
## POST `/position`

**Auth required** : No

**Data constraints**

```json
{
    "x": "[double value with dot separation]",
    "y": "[double value with dot separation]",
    "sessionId": "[double value with dot separation]",
    "read_at": "[datetime in ISO-format]"
}
```

**Data example**

```json
{
    "x": "111.111111",
    "y": "222.222222",
    "sessionId": "1",
    "read_at": "2020-04-03 14:44:10"
}
```

## Success Response

**Code** : `200 OK`

**Content** : No

## Error Response

**Condition** : If not valid datatype or not valid datetime format.

**Code** : `500 Internal Server Error`

**Content** :

```json
{
    "error": {
      "_errno":"errorNumber",
      "message":"errorMessage",
      "name": "nameOfException"
    }
}
```
