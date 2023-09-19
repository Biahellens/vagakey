![vagakey](https://github.com/Biahellens/vagakey/blob/main/client/public/vkIcon.svg)
#  Vagakey

Um sistema de gestão para microempresas e pequenas empresas que trabalham com estacionamentos na grande São Paulo.

- [VagaKey](#VagaKey)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [Server](#server)
    - [Cliente](#cliente)


## Tecnologias
Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [React.js](https://react.dev/);
  - [styled-components](https://styled-components.com/).
- [Npm](https://www.npmjs.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [Java](https://www.java.com/pt-BR/)
- [Docker](docker.com)

## Inicializando

O projeto foi construido de maneira desacoplada, sendo assim, o server desenvolvido totalmente desacoplado do cliente.

### Server

O server foi construido utilizando o [Java](https://www.java.com/pt-BR/), que era uma linguagem obrigatória para o nosso backend. E também foi utilizado o [Docker](docker.com) para separar o backend em um container. Com tudo configurado é possível estar subindo os contêineres para a aplicação estar no ar através do seguinte comando:

```bash
$ docker build -t vagakey
```

agora, podemos estar inicializando com através do comando:

```bash
$ docker run -p 8080:8080 --name vagakey vagakey:lasted
```

que ficará disponivel na seguninte url: [localhost:8080](http://localhost:8080).

### Cliente
O desenvolvimento do nosso cliente foi criado um SPA utilizando React, com template Typescript. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e xecutar o seguinte comando no terminar:

```bash
$ yarn client:install
```

agora com as dependencias instaladas é possível estar executando o cliente:

```bash
$ yarn client:start
```

que ficará disponivel na seguninte url: [localhost:3000](http://localhost:3000).
