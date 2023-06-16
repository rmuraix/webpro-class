window.onload = function () {
  var button_l = document.getElementById("left_b");
  button_l.disabled = true;
};

var img_num = 0;

function image_change(i) {
  var url = "";
  img_num = i;
  var button_l = document.getElementById("left_b");
  var button_r = document.getElementById("right_b");
  if (i == 0) {
    url =
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Balaeniceps_rex_2.jpg";
    button_l.disabled = true;
    button_r.disabled = false;
  } else if (i == 1) {
    button_l.disabled = false;
    button_r.disabled = false;
    url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Balaeniceps_rex_2_%28zoo_Zurich%29.jpg/800px-Balaeniceps_rex_2_%28zoo_Zurich%29.jpg";
  } else if (i == 2) {
    button_l.disabled = false;
    button_r.disabled = false;
    url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Balaeniceps_rex_-Ueno_Zoo%2C_Tokyo%2C_Japan_-upper_body-8a.jpg/1280px-Balaeniceps_rex_-Ueno_Zoo%2C_Tokyo%2C_Japan_-upper_body-8a.jpg";
  } else if (i == 3) {
    button_l.disabled = false;
    button_r.disabled = false;
    url =
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Schuhschnabel_fg02.jpg";
  } else if (i == 4) {
    url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Shoebill_stork_oeganda_2007.jpg/1280px-Shoebill_stork_oeganda_2007.jpg";
    button_l.disabled = false;
    button_r.disabled = true;
  }
  var img = document.getElementById("img_01");
  img.src = url;
}

function goLeft() {
  var button_r = document.getElementById("right_b");
  button_r.disabled = false;
  if (img_num > 0) {
    img_num -= 1;
    image_change(img_num);
  }
  if (img_num == 0) {
    var button_l = document.getElementById("left_b");
    button_l.disabled = true;
  }
}

function goRight() {
  var button_l = document.getElementById("left_b");
  button_l.disabled = false;
  if (img_num < 4) {
    img_num += 1;
    image_change(img_num);
  }
  if (img_num == 4) {
    var button_r = document.getElementById("right_b");
    button_r.disabled = true;
  }
}
