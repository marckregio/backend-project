import "dotenv/config"; //To use .env
import express from "express";
import * as http from "http";
import * as https from "https";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import debug from "debug";
import cors from "cors";
import { initializeRoutes } from "./src/routes";
import "reflect-metadata";
//import { initializeDatabase } from "./src/entities";
var fs = require("fs");

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: String | Number = process.env.PORT || 4007;
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
    expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        msg: "HTTP {{req.method}} {{req.url}}",
        expressFormat: true
    })
);

app.use(
    expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        msg: "HTTP {{req.method}} {{req.url}}",
    })
);

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Nothing will see here. But it works!");
});


server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    //api-docs
    //swaggerConfig(app);
    
    initializeRoutes(app, false);
    //initializeDatabase();
});

