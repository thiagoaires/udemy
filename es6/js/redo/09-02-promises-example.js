const posts = fetch('https://willianjusten.com.br/search.json');

//promise tem 3 status
/*
const promise = {
    pending: esperando acontecer,
    resolved: aconteceu com sucesso,
    rejected: ocorreu um problema na promise
}
*/
// setTimeout(() => {
//     console.log(posts)
// }, 1000);

posts
    .then(data => data.json())
    //.then(data => console.log(data))
    // .then(data => data.map(post => {
    //         console.log(post.title)
    // }));
    .then(data =>{
        throw new Error('deu ruim')
    })
    .catch(err => console.error(err));