import router from "./router.js";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import http from "http";
import config from "./config.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "./utilities/logger.js";
import { httpAuthMiddleware } from "./middlewares/authMiddleware.js";

const {
  auth: { allowedOrigins, auth_enabled },
  database: { connection_string, database_config },
  server: { port },
  server: rootConfig,
} = config;

const app = express(rootConfig);
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins
  })
);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
const server = http.createServer(app);
app.use(bodyParser.json());

app.use(cookieParser());
app.use("/api", httpAuthMiddleware, router);

try {
  mongoose.connect(connection_string, { ...database_config });
  logger.success("----- Connected to mongo instance -----");
} catch (error) {
  console.log(error);
}

server.listen(port, () => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "----- Chatterona_ui_api running on port",
    port,
    "\x1b[36m",
    "-----"
  );
});
