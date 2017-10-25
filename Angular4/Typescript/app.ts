import {NaveEspacial, PortaMala} from './base-ships'
import {Golquadrado} from './starfighters'

import * as _ from 'lodash'

//###

console.log(_.pad("Exemplo de Typescript TOP", 60, '-'))

let fuscaoPreto = new NaveEspacial('motor de fusca');
fuscaoPreto.pularParaHiperespaco()


let golBranco = new Golquadrado();
golBranco.pularParaHiperespaco();

let bomDeCarga = (ship: PortaMala) => ship.capacidadePortaMala > 2

console.log(`gol branco é bom pra levar muamba? ${bomDeCarga(golBranco) ? 'sim' : 'nao'} `)