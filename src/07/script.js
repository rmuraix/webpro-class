import { images } from "./image.json.js";
const isValidNumber = (i) => {
  if (i <= 8) return true;
  return false;
};
const changeImage = (imageNumber) => {
  if (!isValidNumber(imageNumber)) {
    _index = 0;
    imageNumber = 0;
  }
  console.log(imageNumber);
  const img = document.getElementById("ayameImg");
  const imgLink = document.getElementById("ayameLink");
  const imgAuther = document.getElementById("imgAuther");
  const imgLicense = document.getElementById("imgLicense");

  img.src = images[imageNumber].src;
  imgLink.href = images[imageNumber].href;
  imgAuther.innerHTML = images[imageNumber].auther;
  imgLicense.innerHTML = images[imageNumber].license;

  _index++;
};
let _index = 0;
setInterval(() => changeImage(_index), 1500);
