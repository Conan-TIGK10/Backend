/*
 * This file contains the routing of the position of the mower
 */

import express from 'express';
import * as positionManager from "../../../../bl/positionManager";


const router = express.Router()

/*
 * Posting a GET request to postition will return all recorded positions
 */
router.get('/', (request,response) => {
    positionManager.selectAll()
        .then(positionData => {
            response
                .status(200)
                .json(positionData)
                .end();
        })
        .catch(error => {
            response
                .status(500)
                .json({error: error})
                .end();
        })
});

/*
 * Posting to position will require a datamodel consisting of x,y & read_at
 */
router.post('/', (request,response) => {
    
    var x :any;
    var y :any;
    var read_at:any;

    x = request.body.x;
    y = request.body.y;
    read_at = request.body.read_at;

    var data :any ={
        x,
        y,
        read_at
    };
    
    positionManager.insert(data)
        .then(()=> {
            response
                .status(200)
                .end();
        })
        .catch(error => {
            response
                .status(500)
                .json({error: error})
                .end();
        }) 
});

module.exports = router