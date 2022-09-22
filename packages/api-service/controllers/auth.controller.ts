import { Hidden, Post, Route, Security, Tags } from "tsoa";
import { CommonControllers } from "./base.controller";
import { Authentication, Login } from "./../interfaces/authentication"
import { AuthService } from "../services/auth.service";
@Tags("authenticate")
@Route("auth")
export class AuthenticationController extends CommonControllers{
	
	@Hidden()
	@Post("login")
	public async login(): Promise<Authentication> {
		const requestObject: Login = {
			name: "marck regio"
		}

		const token = await AuthService().authenticate(requestObject);
		return { token: `Bearer ${token}` };
	}

	
	constructor() {
		super('AuthenticationController');
	}
}