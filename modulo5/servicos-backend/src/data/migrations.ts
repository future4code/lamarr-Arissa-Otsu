import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS User_Address (
         zipcode VARCHAR(255) NOT NULL,
         street VARCHAR(255) NOT NULL,
         number VARCHAR(255) NOT NULL,
         complement VARCHAR(255),
         district VARCHAR(255) NOT NULL,
         city VARCHAR(255) NOT NULL,
         state VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)


createTables()