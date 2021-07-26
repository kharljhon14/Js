const imgContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

let ready = false;
let imgsLoaded = 0;
let totalImgs = 0;
let photosArray = [];
let initialLoad = true;

let imgCount = 5;
const apiKey = "sLuG97xLhmkeLQHqVOgfeN3JJu6eqvmll-FBWmdg29Q";
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imgCount}`;

function updateAPIURLWithNewCount(imgCount) {
  apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imgCount}`;
}

//Check if all imgs are loaded
function imgLoaded() {
  imgsLoaded++;
  if (imgsLoaded === totalImgs) {
    loader.hidden = true;
    ready = true;
    initialLoad = false;
  }
}

//Helper function for setting up the attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for links and photos
function displayPhotos() {
  imgsLoaded = 0;
  totalImgs = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //if img is loaded
    img.addEventListener("load", imgLoaded());
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}
// Get unsplash photos
async function getPhotos() {
  try {
    const res = await fetch(apiURL);
    photosArray = await res.json();

    if (initialLoad) {
      updateAPIURLWithNewCount(30);
      initialLoad = false;
    }
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
}

//Infinite Scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 3000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
