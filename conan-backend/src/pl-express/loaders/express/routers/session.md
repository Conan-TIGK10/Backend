# Session Router

## GET `/session`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "1",
    "name": "session one",
    "created_at": "2020-04-23T12:34:14.000Z"
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
## POST `/session`

**Auth required** : No

**Data constraints**

```json
{
    "name": "[string]",
}
```

**Data example**

```json
{
  "name": "my session"
}
```

## Success Response

**Code** : `200 OK`

**Content** : 
```json
{
    "id": [your active session id]
}
```

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
