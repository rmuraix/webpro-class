import { images } from "./image.json.js";
const isLessThanMax = (i) => {
  if (i <= 8) return true;
  return false;
};
const isMoreThanZero = (i) => {
  if (i >= 0) return true;
  return false;
};
const changeImage = (imageNumber) => {
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("righttBtn");
  if (!isLessThanMax(imageNumber)) {
    _index = 0;
    imageNumber = 0;
  }
  if (!isMoreThanZero(imageNumber)) {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
    _index = 0;
    imageNumber = 0;
  }
  if (!isMoreThanZero(imageNumber - 1)) {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  } else if (!isLessThanMax(imageNumber + 1)) {
    leftBtn.disabled = false;
    rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
  const img = document.getElementById("ayameImg");
  const imgLink = document.getElementById("ayameLink");
  const imgAuther = document.getElementById("imgAuther");
  const imgLicense = document.getElementById("imgLicense");
  console.log("index:" + _index);
  console.log("img:" + imageNumber);
  img.src = images[imageNumber].src;
  imgLink.href = images[imageNumber].href;
  imgAuther.innerHTML = images[imageNumber].auther;
  imgLicense.innerHTML = images[imageNumber].license;
};
const toRight = () => {
  _index += 1;
  changeImage(_index);
  const rightBtn = document.getElementById("righttBtn");
  if (_index >= 8) {
    rightBtn.disabled = true;
  } else {
    rightBtn.disabled = false;
  }
};
const toLeft = () => {
  _index -= 1;
  changeImage(_index);
  const leftBtn = document.getElementById("leftBtn");

  if (_index <= 0) {
    leftBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
  }
};
const main = (i) => {
  changeImage(i);
};
window.toRight = toRight;
window.toLeft = toLeft;
let _index = 0;
setInterval(() => main(_index), 1500);
setInterval(() => _index++, 1500);
