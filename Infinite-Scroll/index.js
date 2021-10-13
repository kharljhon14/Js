const imgContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

let photosArray = [];

const count = 10;
const apiKey = "sLuG97xLhmkeLQHqVOgfeN3JJu6eqvmll-FBWmdg29Q";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper function for setting up the attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for links and photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}
// Get unsplash photos
async function getPhotos() {
  try {
    const res = await fetch(apiURL);
    photosArray = await res.json();
    console.log(photosArray);
    displayPhotos();
  } catch (err) {
    console.log(err);
  } identifier
}

getPhotos();
