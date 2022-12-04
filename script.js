const input = document.getElementById('text-input'); // Captura o campo de input de texto da página
const memeInsert = document.getElementById('meme-insert'); // Captura o campo de input de imagem da página
const memeText = document.getElementById('meme-text'); // Captura o parágrafo onde ficará o texto do meme
const memeImage = document.getElementById('meme-image'); // Captura o campo onde ficará a imagem do meme
const memeContainer = document.getElementById('meme-image-container'); // Captura o container onde ficam a imagem e o texto do meme
const buttonsSection = document.getElementById('buttons-section'); // Captura a seção onde ficarão os botões para mudar a moldura
const tamplates = document.getElementById('templates'); // Captura a seção onde ficarão os tamplates de memes
const form = document.querySelector('form'); // Captura o formulário onde ficam os inputs de texto e imagem
const imagesPath = ['imgs/meme1.png', 'imgs/meme2.png', 'imgs/meme3.png', 'imgs/meme4.png']; // Caminhos das imagens de tamplates
// Array de objetos onde cada objeto representa um dos botões que mudam a moldura do preview do meme
const buttons = [
  {
    id: 'fire',
    border: '3px dashed red',
    className: 'btn btn-danger',
  },
  {
    id: 'water',
    border: '5px double blue',
    className: 'btn btn-primary',
  },
  {
    id: 'earth',
    border: '6px groove rgb(0, 128, 0)',
    className: 'btn btn-success',
  },
];

// Adiciona o evento de input no campo de input de texto
input.addEventListener('input', () => {
  memeText.innerText = input.value; // Pega o valor atual do input e insere no innerText do parágrafo onde fica o texto do meme
});

// Adiciona o evento change no campo de input de imagens
memeInsert.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]); // Captura o primeiro valor da FileList que fica guardada na propriedade files do campo de input de arquivos
  // URL.creatObjectURl() cria um um URL que pode ser usado como source a partir de um dos valores de files
});

// Cria os botões com as especificações citadas no array de objetos
buttons.forEach((button) => {
  const createdButton = document.createElement('button'); // Cria um elemento button
  createdButton.id = button.id; // Define o id do button criado para o do objeto button atual do loop forEach
  createdButton.className = button.className; // Define o className do button criado para o className do objeto button atual do loop forEach
  createdButton.value = button.border; // Define o valor do button criado para o estilo de borda que ele aplicará com base no objeto button atual do loop forEach
  // Adiciona o evento de click no botão criado
  createdButton.addEventListener('click', (event) => {
    memeContainer.style.border = event.target.value; // Modifica o estilo da borda do meme-container para o valor do botão clicado
  });
  createdButton.innerText = button.id; // Defina o innerText do button criado para o mesmo nome do id do objeto button do loop atual do forEach
  buttonsSection.appendChild(createdButton); // Adiciona o button criado na seção de botões no documento HTML
});

// Cria as imagens de tamplates de memes
imagesPath.forEach((path, index) => {
  const img = document.createElement('img'); // Cria um elemento img
  img.id = `meme-${index + 1}`; // Define o id da img criado como meme-(indexDoElemento atual + 1)
  img.src = path; // Define o src da img criada como o caminho(path) da imagem atual do loop forEach
  // Adiciona o evento de click na img criada
  img.addEventListener('click', (event) => {
    memeImage.src = event.target.src; // Defina o src da img do meme como o mesmo src da img de tamplate que foi clicada
  });
  tamplates.appendChild(img); // Adiciona a img criada na seção de tamplates
});

// Adiciona o evento de submit no formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne que o recarregue a página ao enviar o formulário
});
