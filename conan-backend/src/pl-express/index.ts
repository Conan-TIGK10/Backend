/* NPM PACKAGES */
import express from 'express'

/* LOADERS */
import loaders from './loaders'

/*
    run(): Promise<void>
    ---------------------------------------------
    Constructs Express application, loads functionality
    and starts listening for connections.
*/
const run = async () => {

    const app: express.Application = express()

    await loaders(app)

    const port: string | undefined = process.env.PORT_API

    /* BINDS AND LISTENS TO CONNECTIONS */
    app.listen(port, () => {
        console.log(`conan-backend is listening on port ${port}`)
    })
}

run()