"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils"); // method
var CsvFileReader_1 = require("./CsvFileReader"); // Class
// Delega (composition) la lectura del fichero CSV a la
// Clase "CsvFileReader" que es del tipo "DataReader"
// y transforma los datos (PARSE)
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        /**
         * MatchData es una Tupla la cuan es una Array de tipos por lo
         * tanto estamos obteniendo una Array de Arrays [][]
         */
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
