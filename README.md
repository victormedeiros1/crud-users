![thumbnail](https://user-images.githubusercontent.com/66215200/228317696-dcc837f8-9f1f-4e77-a6f9-94d5a6a3e683.jpg)

# Sobre
Uma aplicação com interfaces simples e bem diretas que possui desde formulário para cadastro à visualização de dados, edição e exclusão.

Montei um pequeno guia para a criação dessa aplicação com metas, conceitos e tecnologias para estudar, para acessá-lo clique [aqui](https://www.notion.so/Desafio-PontoTel-Guia-autoral-cc84efa4f297441d9ab4c6745ecef69f?pvs=4).

## Interfaces e Design System UI/UX
Todos os componentes, paleta de cores e telas foram feitas e estão representadas no [Figma](https://www.figma.com/file/HS0KBjKXLAbU45QINfo02q/CRUD---PontoTel?node-id=0-1&t=GNNfU0TvbLiyOXQs-0) da aplicação.


## Passo a passo de como rodar o frontend. Vamos lá, na pasta do projeto:

1º Instale todas as dependências: 

```sh
npm install
```

2º Levantando o servidor
```sh
npm run dev
```
Acesse: http://127.0.0.1:5173/ que é a url onde sua aplicação está rodando.

### Criando um build

```sh
npm run build
```

### Testes unitários
Essa aplicação também possui testes unitários, para executá-los rode co omando:
```sh
npm run test:unit
```

### Extra

Aqui estão algumas credênciais válidas para criação da conta, já que alguns campos possuem formato específico para serem válidos como CPF e PIS.

- Email: `admin@gmail.com`
- CEP: `59375000`
- CPF: `011.727.192-12`
- PIS: `587.89463.85-1`
- Senha: `Asdasd1`

