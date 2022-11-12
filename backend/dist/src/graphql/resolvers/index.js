"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const queries_1 = __importDefault(require("./queries"));
const mutations_1 = __importDefault(require("./mutations"));
exports.resolvers = {
    Query: queries_1.default,
    Mutation: mutations_1.default,
    JSON: graphql_type_json_1.default,
};
//# sourceMappingURL=index.js.map