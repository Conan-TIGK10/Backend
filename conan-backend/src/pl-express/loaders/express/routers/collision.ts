/*
 * This file contains the routing of the collision position of the mower
 */

import express from "express";
import * as collisionManager from "../../../../bl/managers/collisionManager";


const router = express.Router();


/*
 * Posting a GET request to collision will return all recorded collisions
 */
router.get("/", async (request, response) => {
    collisionManager
      .selectAll()
      .then(collisionData => {
        response
          .status(200)
          .json(collisionData)
          .end();
      })
      .catch(error => {
        response
          .status(500)
          .json({ error: error })
          .end();
      });
  });


 /*
 * Posting to position will require a datamodel consisting of id
 */
router.post("/", async (request, response) => {
 
    var positionId: number;
    positionId = request.body.positionId;

  
    var data: any = {
      positionId
    };
  
  
    collisionManager
      .insert(data)
      .then(() => {
        response.status(200).end();
      })
      .catch(error => {
        response
          .status(500)
          .json({ error: error })
          .end();
      });
  });

  export default router;