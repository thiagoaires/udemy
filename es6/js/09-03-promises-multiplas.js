const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({currency: 'euro', value: 3.73})
    }, 2000);
});

const countries = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Italia', 'Rondonia', 'Jd. Varginha'])
    },600);
});

// Promise
//     .all([currency, countries])
//     .then(responses => {
//         console.log(responses)
//     });
Promise
    .race([currency, countries])
    .then(responses => {
        console.log(responses)
    });