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
});
