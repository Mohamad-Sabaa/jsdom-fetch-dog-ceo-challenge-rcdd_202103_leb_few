console.log('%c HI', 'color: firebrick')
const image = document.getElementById("dog-image-container");
function fetchImages (image) {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });
}

//fetchImages(image);
