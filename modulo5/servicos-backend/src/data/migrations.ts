import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS User_Address (
         CEP VARCHAR(255) NOT NULL,
         Logradouro VARCHAR(255) NOT NULL,
         Número VARCHAR(255) NOT NULL,
         Complemento VARCHAR(255),
         Bairro VARCHAR(255) NOT NULL,
         Cidade VARCHAR(255) NOT NULL,
         Estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)


createTables()