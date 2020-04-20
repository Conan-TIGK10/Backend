/*
 * This file contains the routing of the session for the mower
 */

import express from "express";
import * as sessionManager from "../../../../bl/managers/sessionManager";

const router = express.Router();

/*
 * Posting a GET request to session will return all recorded session
 */
router.get("/", async (request, response) => {
    sessionManager
      .selectAll()
      .then(sessionData => {
        response
          .status(200)
          .json(sessionData)
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
 * Posting to session will require a datamodel consisting name
 */
router.post("/", async (request, response) => {
    var name: any;
    name = request.body.name;
    var data: any = {
        name
    };

    sessionManager
      .insert(data)
      .then((sessionData) => {
        response.status(200)
                .json({id: sessionData})
                .end();
      })
      .catch(error => {
        response
          .status(500)
          .json({ error: error })
          .end();
      });
  });


export default router;