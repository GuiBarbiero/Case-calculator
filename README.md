
# Calculadora Nest.js

Este é um projeto de uma calculadora básica construída com Nest.js e Prisma. A calculadora suporta operações matemáticas básicas e avançadas. As operações realizadas são registradas em um banco de dados SQLite e podem ser listadas.

## Funcionalidades

- Adição
- Subtração
- Multiplicação
- Divisão
- Logaritmo
- Percentual
- Quadrado
- Cubo
- Listagem de todas as operações realizadas

## Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/calculadora-nestjs.git
   cd calculadora-nestjs
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

## Executando o Projeto

1. Inicie o servidor Nest.js:

   ```bash
   npm run start:dev
   ```

2. Abra o navegador e vá para `http://localhost:3000` para acessar a interface da calculadora.

## Endpoints da API

### Adição

- **URL**: `POST /operacoes/adicao`
- **Body**:
  ```json
  {
    "operand1": 10,
    "operand2": 5
  }
  ```

### Subtração

- **URL**: `POST /operacoes/subtracao`
- **Body**:
  ```json
  {
    "operand1": 10,
    "operand2": 5
  }
  ```

### Multiplicação

- **URL**: `POST /operacoes/multiplicacao`
- **Body**:
  ```json
  {
    "operand1": 10,
    "operand2": 5
  }
  ```

### Divisão

- **URL**: `POST /operacoes/divisao`
- **Body**:
  ```json
  {
    "operand1": 10,
    "operand2": 5
  }
  ```

### Logaritmo

- **URL**: `POST /operacoes/logaritmo`
- **Body**:
  ```json
  {
    "operand1": 10
  }
  ```

### Percentual

- **URL**: `POST /operacoes/percentual`
- **Body**:
  ```json
  {
    "operand1": 50,
    "operand2": 200
  }
  ```

### Quadrado

- **URL**: `POST /operacoes/quadrado`
- **Body**:
  ```json
  {
    "operand1": 4
  }
  ```

### Cubo

- **URL**: `POST /operacoes/cubo`
- **Body**:
  ```json
  {
    "operand1": 3
  }
  ```

### Listar Operações

- **URL**: `GET /operacoes/listar`

## Estrutura do Projeto

```
calculator
├── node_modules
├── prisma
│   └── schema.prisma
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── operations
│   │   ├── operations.controller.ts
│   │   ├── operations.module.ts
│   │   └── operations.service.ts
│   └── prisma
│       └── prisma.service.ts
├── public
│   ├── index.html
│   └── styles.css
├── test
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

## Licença

Este projeto é licenciado sob os termos da licença MIT.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
