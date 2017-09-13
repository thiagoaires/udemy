const artigo = {

    titulo: 'Aliquam venenatis dolor suscipit urna viverra ultrices.',

    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    corpo: 'Integer est nunc, consectetur vel ex vulputate, blandit feugiat augue. Mauris eleifend diam ut lacinia lacinia. Quisque at vulputate lorem. Cras dignissim lacus sed dui varius sagittis. In vitae nisi dignissim, tempor lectus et, dapibus felis. Duis tincidunt dolor ac turpis hendrerit, sed porttitor dui tempor. Quisque pulvinar tincidunt dui, at suscipit leo convallis non. Vivamus dignissim augue tortor, vitae facilisis justo mollis a. Pellentesque nec massa tristique dui aliquam aliquet. Duis nec nisl a nisl dapibus accumsan. Nunc et dapibus velit. Ut eget diam lobortis, egestas arcu faucibus, eleifend lacus. Duis aliquam porta dui nec commodo. Curabitur feugiat nunc sem, eu maximus justo condimentum id.',

    tags: ['teste','nossas', 'tags'],
    autor: 'Thiagao das Tapioca'

};
function mostrAutor(nomeAutor){
    return (nomeAutor) ? nomeAutor : 'Desconhecido'
};
const marcacao = `
                    <article>
                        <header>
                            <h1>
                                ${artigo.titulo}
                            </h1<
                        </header>
                    </article>
                    <section>
                        <p>
                            ${artigo.intro}
                        </p>
                    </section>
                    <footer>
                        <ul>
                            ${artigo.tags.map(tag => `<li>${tag}</li>`).join('')}
                        </ul>
                        <p>
                            Autor: ${mostrAutor(artigo.autor)}
                        </p>
                    </footer>
`;
document.body.innerHTML = marcacao;