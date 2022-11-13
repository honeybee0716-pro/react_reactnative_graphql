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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default
        .get('https://n8n.selfhosted.gg/webhook/09ce62cd-7360-469d-b360-946bd23f2aa8')
        .then((response) => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
        .catch((error) => {
        console.log(error);
    });
});
main();
exports.default = main;
//# sourceMappingURL=testHerokuCron.js.map