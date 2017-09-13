const mapaDeTeste = {
    tags: ['tag', 'rick', 'dilma']
};
const tagsMapeadas = mapaDeTeste.tags.map(retorno => {
    return `tags: ${retorno}`
});
console.log(tagsMapeadas);