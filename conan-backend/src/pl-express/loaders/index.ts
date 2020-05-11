/* NPM PACKAGES */
import express from 'express'

/* LOADERS */
import expressLoader from './express'

/*
    function(expressApp: express.Application): Promise<void>
    --------------------------------------------------------
    Loads application functionality
*/
export default async (expressApp: express.Application) => {
    /* Load Express.js */
    /* CORS-SETUP */
    expressApp.use(function (req, res, next) {

        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header('Access-Control-Allow-Methods', 'GET, POST')

        next()

    })

    await expressLoader(expressApp)
    console.log('Express.js loaded')
}