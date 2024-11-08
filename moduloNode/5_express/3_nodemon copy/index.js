const express = require('express') // Importa o módulo Express, um framework que facilita a criação de servidores.
const app = express()              // Cria uma instância da aplicação Express.
const port = 3000                  // Define a porta em que o servidor vai escutar as requisições.

const path = require('path')       // Importa o módulo 'path', que facilita o trabalho com caminhos de arquivos e diretórios.

const basePath = path.join(__dirname, 'meusTemplates') 
// Define o caminho base para os templates. 
// '__dirname' representa o diretório atual, e 'path.join' cria um caminho completo para a pasta 'meusTemplates'.

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // Envia o arquivo 'index.html' como resposta para requisições GET na rota raiz ('/').
})
// Define uma rota para o caminho raiz ('/'). 
// Quando uma requisição GET é feita na raiz ('/'), o servidor responde enviando o arquivo 'index.html' localizado em 'meusTemplates'.

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Inicia o servidor na porta especificada. 
// Quando o servidor está ativo, exibe uma mensagem no console indicando que o servidor está rodando na porta especificada.


// path e path.join() são usados para construir caminhos de arquivos de forma consistente, permitindo que o código funcione em diferentes sistemas operacionais.

// res.sendFile() envia um arquivo HTML como resposta ao navegador, em vez de uma mensagem de texto.