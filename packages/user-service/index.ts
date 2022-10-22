import express from "express";
import * as http from "http";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";
import bodyParser from "body-parser";
import morgan from "morgan";

import {initializeConsumers} from "./consumers";

import cluster from "cluster";
import totalCPUs from "os";

const clustered = false;

//clustering sample
if (cluster.isMaster && clustered) {
  console.log(`Number of CPUs is ${totalCPUs.cpus().length}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  let core = 4 //safe definition
  for (let i = 0; i < core; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);
  const app: express.Application = express();
  const server: http.Server = http.createServer(app);
  const port: string | number = 4002;

  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.static("public"));
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ limit: "100mb", extended: true }));
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
        explorer: true,
        validatorUrl: null
      },
      customSiteTitle: "API Documentation",
      customfavIcon: "/favicon.ico",
      customCssUrl: "/swag.css",
    }),
  );
  app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Nothing will see here. But it works!");
  });
  
  app.get("/count/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;
  
    if (n > 5000000000) n = 5000000000;
  
    for (let i = 0; i <= n; i++) {
      count += i;
    }
  
    res.send(`Final count is ${count}`);
  });
  
  server.listen(port, () => {
    initializeConsumers();
  });
}
