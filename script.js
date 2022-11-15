const input = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

console.log(memeImage.src);
input.addEventListener('keyup', () => {
  
  memeText.innerText = input.value;
});

memeInsert.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  if (memeImage.src === 'http://127.0.0.1:5500/') {
    memeText.style.color = 'black';
  } else {
    memeText.style.color = 'white';
  }
});
