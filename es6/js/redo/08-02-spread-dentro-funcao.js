function makeSandwich(bread, cheese, sauce){
    console.log(`seu sanduiche com ${bread}, no meio vai um belo ${cheese} temperado com ${sauce}`);
}

makeSandwich('paofrances', 'cheddar', 'malagueta');

const ingredients = ['pullman', 'prato', 'sazon'];

makeSandwich(...ingredients);