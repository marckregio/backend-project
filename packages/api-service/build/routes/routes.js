"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const auth_controller_1 = require("./../controllers/auth.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const welcome_controller_1 = require("./../controllers/welcome.controller");
const auth_service_1 = require("./../services/auth.service");
// @ts-ignore - no great way to install types from subpackage
const promiseAny = require('promise.any');
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Authentication": {
        "dataType": "refObject",
        "properties": {
            "token": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Hello": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/auth/login', ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthenticationController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthenticationController.prototype.login)), function AuthenticationController_login(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new auth_controller_1.AuthenticationController();
            const promise = controller.login.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/welcome/:name', authenticateMiddleware([{ "api_key": [] }]), ...((0, runtime_1.fetchMiddlewares)(welcome_controller_1.WelcomeController)), ...((0, runtime_1.fetchMiddlewares)(welcome_controller_1.WelcomeController.prototype.hello)), function WelcomeController_hello(request, response, next) {
        const args = {
            name: { "in": "path", "name": "name", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new welcome_controller_1.WelcomeController();
            const promise = controller.hello.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return function runAuthenticationMiddleware(request, _response, next) {
            return __awaiter(this, void 0, void 0, function* () {
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                // keep track of failed auth attempts so we can hand back the most
                // recent one.  This behavior was previously existing so preserving it
                // here
                const failedAttempts = [];
                const pushAndRethrow = (error) => {
                    failedAttempts.push(error);
                    throw error;
                };
                const secMethodOrPromises = [];
                for (const secMethod of security) {
                    if (Object.keys(secMethod).length > 1) {
                        const secMethodAndPromises = [];
                        for (const name in secMethod) {
                            secMethodAndPromises.push((0, auth_service_1.expressAuthentication)(request, name, secMethod[name])
                                .catch(pushAndRethrow));
                        }
                        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                        secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                            .then(users => { return users[0]; }));
                    }
                    else {
                        for (const name in secMethod) {
                            secMethodOrPromises.push((0, auth_service_1.expressAuthentication)(request, name, secMethod[name])
                                .catch(pushAndRethrow));
                        }
                    }
                }
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                try {
                    request['user'] = yield promiseAny(secMethodOrPromises);
                    next();
                }
                catch (err) {
                    // Show most recent error as response
                    const error = failedAttempts.pop();
                    error.status = error.status || 401;
                    next(error);
                }
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            });
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9KQUFvSjtBQUNwSiwyQ0FBNEo7QUFDNUosb0pBQW9KO0FBQ3BKLHNFQUE0RTtBQUM1RSxvSkFBb0o7QUFDcEosNEVBQXdFO0FBQ3hFLDZEQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0QsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBSTFDLG9KQUFvSjtBQUVwSixNQUFNLE1BQU0sR0FBcUI7SUFDN0IsZ0JBQWdCLEVBQUU7UUFDZCxVQUFVLEVBQUUsV0FBVztRQUN2QixZQUFZLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUM7U0FDakQ7UUFDRCxzQkFBc0IsRUFBRSxLQUFLO0tBQ2hDO0lBQ0Qsb0pBQW9KO0lBQ3BKLE9BQU8sRUFBRTtRQUNMLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFlBQVksRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQztTQUNuRDtRQUNELHNCQUFzQixFQUFFLEtBQUs7S0FDaEM7SUFDRCxvSkFBb0o7Q0FDdkosQ0FBQztBQUNGLE1BQU0saUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV4RCxvSkFBb0o7QUFFcEosU0FBZ0IsY0FBYyxDQUFDLEdBQW1CO0lBQzlDLDhHQUE4RztJQUM5RyxtSUFBbUk7SUFDbkksMkhBQTJIO0lBQzNILDhHQUE4RztJQUMxRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDbEIsR0FBRyxDQUFDLElBQUEsMEJBQWdCLEVBQWlCLDBDQUF3QixDQUFDLENBQUMsRUFDL0QsR0FBRyxD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