 
/* PACKAGES */
import Util from 'util'
import MySql from 'mysql'

const CONNECTION_HANDLER = () => {

  const CONNECTION = MySql.createConnection({
        host: process.env.MYSQL_DATABASE,
        user: 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

  return {
    query( ...args: any ) {
        return Util.promisify( CONNECTION.query )
            .apply( CONNECTION , args )
    },
    close() {
        return Util.promisify( CONNECTION.end ).call( CONNECTION )
    }
  }
}

export default CONNECTION_HANDLER
