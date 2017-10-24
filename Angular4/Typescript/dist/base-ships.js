"use strict";
exports.__esModule = true;
var NaveEspacial = /** @class */ (function () {
    function NaveEspacial(propulsor) {
        this.propulsor = propulsor;
    }
    NaveEspacial.prototype.pularParaHiperespaco = function () {
        console.log("pulando pro hiperespaco com " + this.propulsor);
    };
    return NaveEspacial;
}());
exports.NaveEspacial = NaveEspacial;
