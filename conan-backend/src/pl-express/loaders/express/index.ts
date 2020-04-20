/* NPM PACKAGES */
import express from 'express'
import bodyParser from 'body-parser'
import positionRouter from './routers/position'
import collisionRouter from './routers/collision'
import sessionRouter from './routers/session'

/* ROUTERS */

/*
    function(app: express.Application): Promise<void>
    --------------------------------------------------
    Loads Express.js middlewares
*/
export default async (app: express.Application) => {
    
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())
    
    /* ROUTER MOUNTS */
    app.use('/position', positionRouter)
    app.use('/collision', collisionRouter)
    app.use('/session', sessionRouter)

}