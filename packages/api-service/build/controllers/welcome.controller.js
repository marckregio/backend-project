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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.WelcomeController = void 0;
const base_controller_1 = require("./base.controller");
const tsoa_1 = require("tsoa");
let WelcomeController = class WelcomeController extends base_controller_1.CommonControllers {
    hello(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = { message: `hello ${name}` };
            return response;
        });
    }
    constructor() {
        super('WelcomeController');
    }
};
__decorate([
    (0, tsoa_1.Security)("api_key"),
    (0, tsoa_1.Get)("{name}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WelcomeController.prototype, "hello", null);
WelcomeController = __decorate([
    (0, tsoa_1.Tags)("welcome"),
    (0, tsoa_1.Route)("welcome"),
    __metadata("design:paramtypes", [])
], WelcomeController);
exports.WelcomeController = WelcomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvd2VsY29tZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCwrQkFBd0Q7QUFLakQsSUFBTSxpQkFBaUIsR0FBdkIsTUFBTSxpQkFBa0IsU0FBUSxtQ0FBaUI7SUFJMUMsS0FBSyxDQUFTLElBQVk7O1lBQ3RDLE1BQU0sUUFBUSxHQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsSUFBSSxFQUFFLEVBQUMsQ0FBQztZQUNwRCxPQUFPLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFRDtRQUNDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRCxDQUFBO0FBUmE7SUFGWixJQUFBLGVBQVEsRUFBQyxTQUFTLENBQUM7SUFDbkIsSUFBQSxVQUFHLEVBQUMsUUFBUSxDQUFDO0lBQ00sV0FBQSxJQUFBLFdBQUksR0FBRSxDQUFBOzs7OzhDQUd6QjtBQVBXLGlCQUFpQjtJQUY3QixJQUFBLFdBQUksRUFBQyxTQUFTLENBQUM7SUFDZixJQUFBLFlBQUssRUFBQyxTQUFTLENBQUM7O0dBQ0osaUJBQWlCLENBWTdCO0FBWlksOENBQWlCIn0=