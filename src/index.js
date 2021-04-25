console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', fetchImages)
const images = document.getElementById("dog-image-container")

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages () {
   fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    for(let i = 0; i < 4; i++)
    images.insertAdjacentHTML('beforeend', `<img src=${json.message[i]}`);
  });

}





//fetchImages(image);
