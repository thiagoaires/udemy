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
var Spacecraft = /** @class */ (function () {
    // propulsor: string
    // constructor(propulsor: string){
    //     this.propulsor = propulsor
    // }
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= .5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("fail");
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
var mf = new MilleniumFalcon();
mf.jumpIntoHyperspace();
console.log(goodForTheJob(mf));
var falcon = new Spacecraft('nos');
falcon.jumpIntoHyperspace();
var message = 'u are the hope kenobio';
console.log(message);
var episode = 4;
episode = episode + 1;
console.log("next episodio is " + episode);
var favoriteDroid;
favoriteDroid = 'bb-8';
console.log("mey droid favorito eh o " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("a distancia " + distance + " eh suficiente pra bater a MF? r: " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("kaway desu NANII " + name); };
call('r2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("" + inc(4, 1));
console.log("" + inc(3));
