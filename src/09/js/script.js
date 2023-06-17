let _index = 0;

function get_path(number) {
  let path = "";
  switch (number) {
    case 0:
      path = "banner00.png";
      break;
    case 1:
      path = "banner01.png";
      break;
    case 2:
      path = "banner02.png";
      break;
    case 3:
      path = "banner03.png";
      break;
    default:
      break;
  }
  return path;
}
function go_left() {
  let target = --_index;

  if (target < 0) {
    target = 3;
    _index = 3;
  }
  const banner = document.getElementById("banner");
  const path = `image/${get_path(target)}`;
  banner.src = path;
  update_dots(target);
}
function go_right() {
  let target = ++_index;
  if (target > 3) {
    target = 0;
    _index = 0;
  }
  const banner = document.getElementById("banner");
  const path = `image/${get_path(target)}`;
  banner.src = path;
  update_dots(target);
}
function update_dots(number) {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot${i}`);

    if (number == i) {
      dot.style.color = "red";
    } else {
      dot.style.color = "gray";
    }
  }
}
function go_num(number) {
  _index = number;
  const path = `image/${get_path(number)}`;
  banner.src = path;

  update_dots(number);
}
