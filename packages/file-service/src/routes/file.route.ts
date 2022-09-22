import express from "express";
import { CommonRoutes } from "./base.route";
import FileController from "./../controllers/file.controller";
import { file_apikey } from "./../../serverconfig";


export class FileRoutes extends CommonRoutes {

    configureRoutes(): express.Application {

        this.app.route("/upload-one-file")
            .post(async (req: express.Request, res: express.Response) => {
                var apikey = req.headers.apikey;
                if (apikey != file_apikey) {
                    res.send({ status: 404, message: "API access forbidden." });
                    return;
                }
                var response = await FileController.uploadOne(req.body);
                if (response != null) {
                    res.send(response);
                }
            });

        this.app.route("/upload-batch-files")
            .post(async (req: express.Request, res: express.Response) => {
                var apikey = req.headers.apikey;
                if (apikey != file_apikey) {
                    res.send({ status: 404, message: "API access forbidden." });
                    return;
                }
                var response = await FileController.uploadMany(req.body);
                if (response != null) {
                    res.send(response);
                }
            });

        this.app.route("/delete-file/:filename")
            .delete(async (req: express.Request, res: express.Response) => {
                var apikey = req.headers.apikey;
                if (apikey != file_apikey) {
                    res.send({ status: 404, message: "API access forbidden." });
                    return;
                }
                var response = await FileController.processForDelete(req.params.filename);
                if (response != null) {
                    res.send(response);
                }
            });

        return this.app;
    }

    constructor(app: express.Application, test_mode: boolean = false) {
        super(app, "FileRoutes", test_mode);
    }
}