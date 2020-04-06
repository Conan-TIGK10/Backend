/*
 * This file contains all the routes 
 * and is the main entrypoint to all 
 * parts of the API.
 */

import express from 'express'


const router = express.Router();

//Position middleware (handles positioning)
router.use("/position", require('./routers/position'))
router.use("/collision", require('./routers/collision'))


module.exports = router;

 
