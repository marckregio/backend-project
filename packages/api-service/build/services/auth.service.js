"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = exports.AuthService = exports.key = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.key = "you and i against the world.";
function AuthService() {
    function authenticate(requestObject) {
        const token = jsonwebtoken_1.default.sign(requestObject, exports.key, {
            expiresIn: "30 days",
        });
        return token;
    }
    return { authenticate };
}
exports.AuthService = AuthService;
function expressAuthentication(request, securityName, scopes) {
    return Promise.resolve();
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUErQjtBQUlsQixRQUFBLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztBQUVsRCxTQUFnQixXQUFXO0lBQ3pCLFNBQVMsWUFBWSxDQUFDLGFBQW9CO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFHLEVBQUU7WUFDekMsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFBO0FBQ3pCLENBQUM7QUFURCxrQ0FTQztBQUVELFNBQWdCLHFCQUFxQixDQUNuQyxPQUF3QixFQUN4QixZQUFvQixFQUNwQixNQUFpQjtJQUVqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBTkQsc0RBTUMifQ==