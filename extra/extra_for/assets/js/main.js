//demonstração de como criar texto no html utilizando o for com js

const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser. '},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3 '},
    {tag: 'footer', texto: 'frase 4'}
]

const container = document.querySelector('.container');

const div = document.createElement('div'); 

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);