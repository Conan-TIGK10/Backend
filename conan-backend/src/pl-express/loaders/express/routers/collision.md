# Collision Router

## GET `/collision`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "sessionId": 1,
    "positionId": 1
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

## POST `/collision`

**Auth required** : No

**Data constraints**

```json
{
    "sessionId": "[number required]",
    "positionId": "[number required]"
}
```

**Data example**

```json
{
  "sessionId": 1,
  "positionId": 1
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
    "error": "errorMessage"
}
```
