const ireland = ['dublin', 'macapa', 'rondonia'];

const love = ireland.map(function(teste){
    return `Nois love ${teste}!`;
});

//agora vem o arrow function

/*

Antes:
function(){

}

Agora: 
() => { OOOOOUUUU
umParametro => {}    

}
//achei a mesma bosta

//mas ai fui surpreendido, uma linha soh

umParametroMesmaLinha => `texto do map{umParametroMesmaLinha}`;


*/

const loveArrow = ireland.map((testeArrow) =>{
    return `love no arrow ${testeArrow}`;
});

const loveArrowSingleLadies = ireland.map(parametroSingle => {
    return `bagulho chato ahahahah ${parametroSingle}`;
});

const loveArrowMesmaLinha = ireland.map(HEMAN => `PARARAM TAntarantTATAM ${HEMAN}`)

console.log(loveArrowMesmaLinha);