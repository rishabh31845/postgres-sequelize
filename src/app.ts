// import .env variables
import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import express from "express";

import { db } from "./database/models";
import SequelizeConnection from "./database/SequelizeConnection";

const app = express();

(async () => {
  await SequelizeConnection.connect();

  // once connection is authenticated, sequelize will sync the database models
  // force flag is used to drop the database and create the database again
  db.sequelize.sync({
    force: true
  })

})();

const server = app.listen(8000, () => {
  console.log(`⚡️[server]: running at http://localhost:${8000}`);
});

process.on('SIGINT', () => {
  SequelizeConnection.close();
  process.exit();
});

export default server;