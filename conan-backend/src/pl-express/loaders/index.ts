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
    await expressLoader(expressApp)
    console.log('Express.js loaded')
}