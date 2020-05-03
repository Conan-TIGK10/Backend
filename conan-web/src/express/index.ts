/* NPM PACKAGES */
import express from "express"

/*
    run(): Promise<void>
    ---------------------------------------------
    Constructs Express application, loads functionality
    and starts listening for connections.
*/
const run = async () => {
  const app: express.Application = express()

  app.use(express.static('./dist/public/build'))

  const appName: string | undefined = process.env.APP_NAME
  app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${appName}</title>
            </head>
            <body>
                <div id="root"></div>
            </body>
        </html>
    `)
  })

  const port: string | undefined = process.env.PORT_WEB

  /* BINDS AND LISTENS TO CONNECTIONS */
  app.listen(port, () => {
    console.log(`conan-web is listening on port ${port}`)
  })
}

run()