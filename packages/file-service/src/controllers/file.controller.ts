import { CommonControllers } from './base.controller';
import FileService from './../services/file.service';

class FileController extends CommonControllers {
    static instance: FileController;

    static getInstance(): FileController {
    	if (!FileController.instance){
    		FileController.instance = new FileController();
    	}
    	return FileController.instance;
    }

    async uploadOne(requestObject: any) {
    	const response = await FileService.uploadOne(requestObject);
    	return response;
    }

    async uploadMany(requestObject: any) {
    	const response = await FileService.uploadMany(requestObject);
    	return response;
    }

		async processForDelete(requestObject: any) {
			const response = await FileService.processForDelete(requestObject);
			return response;
	}



    constructor() {
    	super('FileController');
    }
}

export default FileController.getInstance();