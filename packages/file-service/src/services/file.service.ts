
import { CommonServices } from "./base.service";
import { OK, CREATED, BADREQUEST, UPDATED, NOTFOUND, REGISTRATION_QUEUE, INTERNAL_SERVER_ERROR } from "../utils/constant";
import { FileDTO, ManyFileDTO } from "../models/FileDTO";
import FileStore from "../entities/tables/FileStore";
import { aws_accessKeyId, aws_secretAccessKey, s3_bucket, s3_folder, s3_region } from "../../serverconfig";
const aws = require('aws-sdk');

aws.config.update({
    region: s3_region,
    accessKeyId: aws_accessKeyId,
    secretAccessKey: aws_secretAccessKey
});

class FileService extends CommonServices {
    static instance: FileService;

    static getInstance(): FileService {
        if (!FileService.instance) {
            FileService.instance = new FileService();
        }
        return FileService.instance;
    }

    async uploadOne(requestObject: FileDTO) {
        try {
            var getfile = await FileStore.findOne({ where: { filename: requestObject.filename } });
            if (getfile == null) {
                var response = await FileStore.create(requestObject);
                if (response != null) {
                    return this.RESPONSE(CREATED, response);
                } else {
                    return this.RESPONSE(BADREQUEST, { message: "Upload error." });
                }
            } else {
                var responseUpdate = await FileStore.update(requestObject, { where: { filename: requestObject.filename } });
                if (responseUpdate != null) {
                    return this.RESPONSE(UPDATED, getfile);
                } else {
                    return this.RESPONSE(BADREQUEST, { message: "Upload error." });
                }
            }
        } catch (err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {});
        }
    }

    async uploadMany(requestObject: ManyFileDTO) {
        try {

            var responseFiles = [];
            return await Promise.all(
                requestObject.files.map(async file => {
                    var getfile = await FileStore.findOne({ where: { filename: file.filename } });
                    if (getfile == null) {
                        var response = await FileStore.create(file);
                        if (response != null) {
                            responseFiles.push(file);
                        }
                    } else {
                        var responseUpdate = await FileStore.update(file, { where: { filename: file.filename } });
                        if (responseUpdate != null) {
                            responseFiles.push(file);
                        }
                    }
                })
            ).then(() => {
                return this.RESPONSE(OK, responseFiles);
            });
        } catch (err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {});
        }
    }

    async processForDelete(filename: string) {
        try {
            var file = await FileStore.findOne({ where: { filename: filename } });
            if (file !== null) {
                await FileStore.update({ forDelete: true, isDelete: false }, { where: { id: file.id } });
                return this.RESPONSE(OK, { message: `File for deleted: ${file.filename}` });
            } else {
                return this.RESPONSE(BADREQUEST, { message: "No files to delete" });
            }
        } catch (err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, err);
        }
    }

    async processDelete() {
        try {
            setInterval(async () => {
                const s3 = new aws.S3();
                var files = await FileStore.findAll({ where: { forDelete: true, isDelete: false } });
                if (files !== null) {
                    files.forEach(async file => {
                        var params = { Bucket: s3_bucket, Key: s3_folder + "/" + file.filename };
                        const awsResponse = await s3.deleteObject(params).promise();
                        if (awsResponse !== null) {
                            await FileStore.update({ isDelete: true }, { where: { id: file.id } });
                            return this.RESPONSE(OK, { message: `File deleted: ${file.filename}` });
                        }
                    });
                } else {
                    return this.RESPONSE(BADREQUEST, { message: "No files for deletion" });
                }
            }, 10000);
        } catch (err: any) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, err);
        }
    }

    constructor() {
        super('FileService');

    }
}

export default FileService.getInstance();