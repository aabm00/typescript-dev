"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/**
 *
 * @param dateString // '07/04/2019'
 * @returns
 */
var dateStringToDate = function (dateString) {
    // console.log("dateString:", dateString); // 07/04/2019
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    // console.log("dateParts:", dateParts); // [ 7, 4, 2019 ]
    var newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    // console.log("newDate:", newDate); // 2019-04-06T22:00:00.000Z
    return newDate;
};
exports.dateStringToDate = dateStringToDate;
