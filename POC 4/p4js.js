// Função para buscar imagem aleatória de cachorro
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
