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
exports.AuthenticateRoutes = void 0;
const auth_controller_1 = require("../controllers/auth.controller");
function AuthenticateRoutes(app) {
    app.route("/login")
        .post((req, res) => __awaiter(this, void 0, void 0, function* () {
        const response = new auth_controller_1.AuthenticationController();
        return res.json(yield response.login());
    }));
}
exports.AuthenticateRoutes = AuthenticateRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2F1dGhlbnRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxvRUFBMEU7QUFFMUUsU0FBZ0Isa0JBQWtCLENBQUMsR0FBd0I7SUFDMUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDakIsSUFBSSxDQUFDLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsSUFBSSwwQ0FBd0IsRUFBRSxDQUFDO1FBQ2hELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTkQsZ0RBTUMifQ==