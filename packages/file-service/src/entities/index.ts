import "dotenv/config";
import { Sequelize } from 'sequelize-typescript';
import { db_ssl, file_service_db } from "../../serverconfig";
import FileService from "../services/file.service";

const DATABASE_URL = process.env.DATABASE_URL || file_service_db;
const DATABASE_SSL = process.env.DATABASE_SSL == "false" ? false : db_ssl;
const DATABASE_RESET = false;

let sqlize = new Sequelize(DATABASE_URL, {
	storage: ':memory:',
	dialect: 'postgres',
	models: [__dirname + '/tables']
});

if (DATABASE_SSL) {
	sqlize = new Sequelize(DATABASE_URL, {
		storage: ':memory:',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: DATABASE_SSL,
				rejectUnauthorized: false
			}
		},
		models: [__dirname + '/tables']
	});
}

// export const initializeDatabase = () => {
// 	sqlize.authenticate()
// 		.then(() => {
// 			console.log('Database Connected');
// 			sqlize.sync({force: DATABASE_RESET})
// 				.then(async () => {
// 					await FileService.processDelete();
// 				});
// 		});
// };


/*
    Notes: No need to initialize models here. Just put the entity inside 'entities' folder
*/