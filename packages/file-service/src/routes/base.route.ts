import express from "express";
import * as bodyParser from "body-parser";


export abstract class CommonRoutes {
    app: express.Application;
    name: string;
    test_mode: boolean;

    constructor(app: express.Application, name: string, test_mode: boolean) {
        this.app = app;
        this.name = name;
        this.test_mode = test_mode;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }

    
    abstract configureRoutes(): express.Application;
}


/*
    Template: for new route file

    export class RegistrationRoutes extends CommonRoutes {
    configureRoutes(): express.Application {

        return this.app;
    }

    constructor(app: express.Application) {
        super(app, "RegistrationRoutes");
    }
    }

    */