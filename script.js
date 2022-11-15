const input = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
const buttonsSection = document.getElementById('buttons-section');
const tamplates = document.getElementById('templates');
// const imagesPath = ['imgs/download(1).jpeg', 'imgs/download.jpeg', 'imgs/Screenshot.png', 'imgs/weird.webp'];
const imagesPath = ['imgs/meme1.png', 'imgs/meme2.png', 'imgs/meme3.png', 'imgs/meme4.png'];
const buttons = [
  {
    id: 'fire',
    border: '3px dashed red',
    'background-color': 'red',
  },
  {
    id: 'water',
    border: '5px double blue',
    'background-color': 'blue',
  },
  {
    id: 'earth',
    border: '6px groove rgb(0, 128, 0)',
    'background-color': 'rgb(0, 128, 0)',
  },
];

input.addEventListener('keyup', () => {
  memeText.innerText = input.value;
});

memeInsert.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
});

for (let index = 0; index < buttons.length; index += 1) {
  const button = document.createElement('button');
  button.id = buttons[index].id;
  button.style.backgroundColor = buttons[index]['background-color'];
  button.addEventListener('click', () => {
    memeContainer.style.border = buttons[index].border;
  });
  button.innerText = button.id;
  button.style.color = 'white';
  buttonsSection.appendChild(button);
}

for (let index = 0; index < imagesPath.length; index += 1) {
  const img = document.createElement('img');
  img.id = `meme-${(index + 1)}`;
  img.src = imagesPath[index];
  img.addEventListener('click', (event) => {
    const imgClicked = event.target;
    memeImage.src = imgClicked.src;
  });
  tamplates.appendChild(img);
}
