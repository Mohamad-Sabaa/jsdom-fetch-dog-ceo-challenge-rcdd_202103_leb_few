console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', fetchImages)


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages () {
   fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });
}

//fetchImages(image);
