document.addEventListener("mousemove", function (e) {
  var body = document.querySelector("body");
  var snow = document.createElement("span");
  var x = e.offsetX;
  var y = e.offsetY;
  snow.style.left = x + "px";
  snow.style.top = y + "px";
  var size = Math.random() * 60;
  snow.style.width = 20 + size + "px";
  snow.style.height = 20 + size + "px";
  body.appendChild(snow);
  setTimeout(() => {
      snow.remove();
  }, 1800);
});
