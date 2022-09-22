import express from "express";
import { CommonRoutes } from "./base.route";
import "reflect-metadata";

import { FileRoutes } from "./file.route";

export const initializeRoutes = (app: express.Application, test_mode: boolean) => {
    //add routes here
    new FileRoutes(app, test_mode);
}
