"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
/**
 * Lee los datos del fichero CSV y los pone en la propiedad "data"
 * Cumple los requerimientos de la interfaz 'DataReader' del
 * fichero 'MatchReader.ts' aunque no la implementa explicitamente:
 *  'export class CsvFileReader implements DataReader'
 *
 * interface DataReader {
 *  read(): void;
 *  data: string[][];
 * }
 *
 */
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
