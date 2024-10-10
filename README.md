Este projeto é uma Prova de Conceito que demonstra o uso do método fetch para realizar chamadas assíncronas no JavaScript. A POC usa a Dog CEO API Random Dog para buscar uma imagem aleatória de cachorro e exibi-la na página web.

1. Síncrono vs Assíncrono:

No JavaScript, o código por padrão é síncrono, ou seja, executado linha a linha de forma sequencial. No entanto, em operações que envolvem tempo, como chamadas de rede, podemos usar código assíncrono, permitindo que o programa continue a ser executado enquanto espera por uma resposta.
Exemplo Síncrono:
javascript
console.log(1);
console.log(2);
console.log(3);
Nesse caso, os números são impressos no console em ordem (1, 2, 3), pois cada linha é executada uma após a outra.

2. Chamadas Assíncronas com Fetch:

A função fetch permite realizar requisições de rede de forma assíncrona, retornando uma Promise que pode ser resolvida ou rejeitada.
javascript
async function getDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data.message); // URL da imagem
    } catch (error) {
        console.error('Erro ao buscar a imagem:', error);
    }
}

Neste exemplo, a função fetch realiza uma requisição HTTP GET à API de imagens aleatórias de cachorros. Com o uso de async/await, o código fica mais limpo e fácil de ler. O método await espera a resposta da fetch sem bloquear o restante do código. Caso ocorra um erro na requisição, ele é capturado e tratado pelo bloco catch.

3. Promise.all():

Podemos utilizar Promise.all() para realizar múltiplas requisições simultâneas e aguardar que todas sejam resolvidas.
javascript
Copiar código
const endpoints = [
    `https://dog.ceo/api/breed/pug/images/random`,
    `https://dog.ceo/api/breed/boxer/images/random`,
    `https://dog.ceo/api/breed/pitbull/images/random`
];

Promise.all(endpoints.map(url => fetch(url).then(res => res.json())))
    .then(images => console.log(images))
    .catch(error => console.error('Erro ao buscar imagens:', error));

4. Estrutura do Projeto:

•	HTML: Define o layout da página e os elementos DOM.
•	CSS: Aplica estilos básicos à página.
•	JavaScript: Utiliza fetch para fazer chamadas assíncronas e manipular a resposta.

5. Exemplo do Código:

javascript

/ Função para buscar imagem aleatória de cachorro
async function getDogImage() {
    try {
        // Fazendo a requisição à API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        
        // Verifica se a resposta foi bem-sucedida 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Converte a resposta em JSON
        const data = await response.json();

        // Exibe a imagem retornada
        const img = document.getElementById('dogImage');
        img.src = data.message;
        img.style.display = 'block'; // Mostra a imagem
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Atribui evento ao botão para buscar nova imagem
document.getElementById('fetchDogBtn').addEventListener('click', getDogImage);
