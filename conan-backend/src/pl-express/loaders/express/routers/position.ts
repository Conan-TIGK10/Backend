/*
 * This file contains the routing of the position of the mower
 */

import express from "express";
import * as positionManager from "../../../../bl/managers/positionManager";

const router = express.Router();

/*
 * Posting a GET request to postition will return all recorded positions
 */
router.get("/", async (request, response) => {
  positionManager
    .selectAll()
    .then((positionData) => {
      response.status(200).json(positionData).end();
    })
    .catch((error) => {
      response
        .status(error._errorStatusCode)
        .json({ error: error.message })
        .end();
    });
});

/*
 * Posting to position will require a datamodel consisting of x,y & read_at
 */
router.post("/", async (request, response) => {
  //var x: any;
  //var y: any;
  //var sessionId: any;
  //var read_at: any;
  //var rotation : any;

  //x = request.body.x;
  //y = request.body.y;
  //sessionId = request.body.sessionId;
  //read_at = request.body.read_at;
  //rotation = request.body.rotation;

  var data: any = {
    x: request.body.x,
    y: request.body.y,
    sessionId: request.body.sessionId,
    read_at: request.body.read_at,
    rotation: request.body.rotation
  };

  positionManager
    .insert(data)
    .then((positionData) => {
      response.status(200).json({ id: positionData }).end();
    })
    .catch((error) => {
      console.log(error)
      response
        .status(error._errorStatusCode)
        .json({ error: error.message })
        .end();
    });
});

export default router;
