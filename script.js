const input = document.getElementById('text-input'); // Captura o campo de input de texto da página
const memeInsert = document.getElementById('meme-insert'); // Captura o campo de input de imagem da página
const memeText = document.getElementById('meme-text'); // Captura o parágrafo onde ficará o texto do meme
const memeImage = document.getElementById('meme-image'); // Captura o campo onde ficará a imagem do meme
const memeContainer = document.getElementById('meme-image-container'); // Captura o container onde ficam a imagem e o texto do meme
const buttonsSection = document.getElementById('buttons-section'); // Captura a seção onde ficarão os botões para mudar a moldura
const tamplates = document.getElementById('templates'); // Captura a seção onde ficarão os tamplates de memes
const form = document.querySelector('form'); // Captura o formulário onde ficam os inputs de texto e imagem
const imagesPath = ['imgs/meme1.png', 'imgs/meme2.png', 'imgs/meme3.png', 'imgs/meme4.png']; // Caminhos das imagens de tamplates
// Array de objetos onde cada objeto representa um botão que vai mudar a moldura do preview do meme
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

input.addEventListener('input', () => {
  memeText.innerText = input.value;
});

memeInsert.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
});

buttons.forEach((button) => {
  const createdButton = document.createElement('button');
  createdButton.id = button.id;
  createdButton.className = button.className;
  createdButton.value = button.border;
  createdButton.addEventListener('click', (event) => {
    memeContainer.style.border = event.target.value;
  });
  createdButton.innerText = button.id;
  createdButton.style.color = 'white';
  buttonsSection.appendChild(createdButton);
});

imagesPath.forEach((path, index) => {
  const img = document.createElement('img');
  img.id = `meme-${index + 1}`;
  img.src = path;
  img.addEventListener('click', (event) => {
    memeImage.src = event.target.src;
  });
  tamplates.appendChild(img);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
});
