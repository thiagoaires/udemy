import {NaveEspacial, PortaMala} from './base-ships'
import {Golquadrado} from './starfighters'

let fuscaoPreto = new NaveEspacial('motor de fusca');
fuscaoPreto.pularParaHiperespaco()


let golBranco = new Golquadrado();
golBranco.pularParaHiperespaco();

let bomDeCarga = (ship: PortaMala) => ship.capacidadePortaMala > 2

console.log(`gol branco é bom pra levar muamba? ${bomDeCarga(golBranco) ? 'sim' : 'nao'} `)