# Primeira funcao explicada
``` Js
import { createServer } from 'node:http'

const server = createServer(((request, response) => {
    response.write('Hello World')
    return response.end();
}))

server.listen(3333)
```


// GET      | BUSCAR UMA INFORMACAO
// POST     | ADICIONAR UMA INFORMACAO
// PUT      | ALTERAR INFORMACOES
// DELETE   | DELETAR UMA INFORMACAO 
// PATCH    | ALTERAR UMA INFORMACAO ESPECIFICA