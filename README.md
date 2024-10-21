# Simulador de Financiamento de Capital de Giro

Este é um back-end de um simulador de financiamento de capital de giro que permite calcular parcelas de empréstimos com base em diferentes opções de cálculo e taxas de juros.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construção de APIs.

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:

   git clone git@github.com:MatheusNSilva/working-capital_simulator.git
   cd node-wsc

2. Instale as dependências 

    Para baixar o Node.js siga as instruções da documentação oficial: https://nodejs.org/en/download/package-manager
    
    Depois rode o comando:

        npm intall

## Executando o projeto:

    npm start

## Executando o projeto com Docker:

1. Certifique-se de ter o Docker instalado na máquina.

2. Construa a imagem Docker:

    docker build -t nome-da-imagem .

3. Execute o container:

    docker run -p 3000:3000 nome-da-imagem

## Testando Api:

    Enpoint: /api/calculate-installments
    Método: POST
    Descrição: Calcula as parcelas conforme os dados fornecidos no corpo da requisição.

## Body:
    {
        "loanAmount": "300000",
        "interestRate": "1,5",
        "installments": "3",
        "concessionDate": "2024-01",
        "calculationOption": "preFixedInterestOB",
        "correctionRate": "0"
    }

## Respota:
    {
        "calculatedInstallments": [
            {
                "installment": 1,
                "paymentDate": "01/12/2024",
                "amount": "R$ 103,00"
            },
            {
                "installment": 2,
                "paymentDate": "01/01/2025",
                "amount": "R$ 102,00"
            },
            {
                "installment": 3,
                "paymentDate": "01/02/2025",
                "amount": "R$ 101,00"
            }
        ]
    }



