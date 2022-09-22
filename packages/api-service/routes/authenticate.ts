import express from 'express';
import { AuthenticationController } from '../controllers/auth.controller';

export function AuthenticateRoutes(app: express.Application) {
	app.route("/login")
		.post(async (req: express.Request, res: express.Response) => {
			const response = new AuthenticationController();
			return res.json(await response.login());
		});
}