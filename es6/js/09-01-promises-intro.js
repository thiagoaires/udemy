var defer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true){
            resolve('hellow, it works');
        } else {
            reject('error');
        }
     }, 2000 );
});

defer
    .then((data) => {
        console.log(data);
        return 'foo';
        }
    )
    .then((data) => console.log(data))
    .catch((err) => console.log(err));