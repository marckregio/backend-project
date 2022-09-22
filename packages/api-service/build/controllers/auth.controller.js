"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.AuthenticationController = void 0;
const tsoa_1 = require("tsoa");
const base_controller_1 = require("./base.controller");
const auth_service_1 = require("../services/auth.service");
let AuthenticationController = class AuthenticationController extends base_controller_1.CommonControllers {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const requestObject = {
                name: "marck regio"
            };
            const token = yield (0, auth_service_1.AuthService)().authenticate(requestObject);
            return { token: `Bearer ${token}` };
        });
    }
    constructor() {
        super('AuthenticationController');
    }
};
__decorate([
    (0, tsoa_1.Hidden)(),
    (0, tsoa_1.Post)("login"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
AuthenticationController = __decorate([
    (0, tsoa_1.Tags)("authenticate"),
    (0, tsoa_1.Route)("auth"),
    __metadata("design:paramtypes", [])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEyRDtBQUMzRCx1REFBc0Q7QUFFdEQsMkRBQXVEO0FBR2hELElBQU0sd0JBQXdCLEdBQTlCLE1BQU0sd0JBQXlCLFNBQVEsbUNBQWlCO0lBSWpELEtBQUs7O1lBQ2pCLE1BQU0sYUFBYSxHQUFVO2dCQUM1QixJQUFJLEVBQUUsYUFBYTthQUNuQixDQUFBO1lBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLDBCQUFXLEdBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBR0Q7UUFDQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0QsQ0FBQTtBQWJhO0lBRlosSUFBQSxhQUFNLEdBQUU7SUFDUixJQUFBLFdBQUksRUFBQyxPQUFPLENBQUM7Ozs7cURBUWI7QUFYVyx3QkFBd0I7SUFGcEMsSUFBQSxXQUFJLEVBQUMsY0FBYyxDQUFDO0lBQ3BCLElBQUEsWUFBSyxFQUFDLE1BQU0sQ0FBQzs7R0FDRCx3QkFBd0IsQ0FpQnBDO0FBakJZLDREQUF3QiJ9