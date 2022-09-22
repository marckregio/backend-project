import { CommonControllers } from "./base.controller";
import { Get, Path, Route, Security, Tags } from "tsoa";
import { Hello } from "../interfaces/welcome";

@Tags("welcome")
@Route("welcome")
export class WelcomeController extends CommonControllers {

	@Security("api_key")
	@Get("{name}")
	public async hello(@Path() name: string): Promise<Hello> {
		const response: Hello = { message: `hello ${name}`};
		return response;
	}

	constructor() {
		super('WelcomeController');
	}
}
