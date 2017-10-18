var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Naveespacial = /** @class */ (function () {
    function Naveespacial(propulsor) {
        this.propulsor = propulsor;
    }
    Naveespacial.prototype.pularParaHiperespaco = function () {
        console.log("pulando pro hiperespaco com " + this.propulsor);
    };
    return Naveespacial;
}());
var nave = new Naveespacial('motor de fusca');
nave.pularParaHiperespaco();
var Golquadrado = /** @class */ (function (_super) {
    __extends(Golquadrado, _super);
    function Golquadrado() {
        return _super.call(this, 'motorAP') || this;
    }
    Golquadrado.prototype.pularParaHiperespaco = function () {
        if (Math.random() >= .5) {
            _super.prototype.pularParaHiperespaco.call(this);
        }
        else {
            console.log("sem gasolina pra abastecer " + this.propulsor);
        }
    };
    return Golquadrado;
}(Naveespacial));
var golBranco = new Golquadrado();
golBranco.pularParaHiperespaco();
