import "reflect-metadata";

import config from "config";
import express from "express";

import { useExpressServer } from "routing-controllers";
import { createConnection } from "typeorm";

const connectionName = config.get("ormconfig.connection") as string;
createConnection(connectionName)
    .then(() => {
        const app = express();

        useExpressServer(app, {
            routePrefix: "/api",
            classTransformer: true,
            validation: true
        });

        const port = config.get("express.port") as number;
        app.listen(port, "0.0.0.0", () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
