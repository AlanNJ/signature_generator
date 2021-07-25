fonts = [
  "'Baloo Tammudu 2', cursive",
  "'Cedarville Cursive',cursive",
  "'Satisfy', cursive",
  "'Dancing Script', cursive",
  "'Aguafina Script', cursive",
  "font-family: 'Almarai', sans-serif",
  "'Lobster Two', cursive",
  "'Great Vibes', cursive",
  "'Sacramento', cursive",
  "'Parisienne', cursive",
  "'Yellowtail', cursive",
  "'Homemade Apple', cursive",
];
let img = document.querySelector("#signn");
function getInputValue() {
  text = document.querySelector("#text").value;
}

function getText() {
  text = document.getElementById("text").value;
  console.log(text);
}
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
const open = function (e) {
  document.querySelector(".result").style.display = "flex";
  getText();
  getInputValue();
  document.querySelector(".result").innerHTML = `
    <h1>${text}</h1>
    `;

  document.querySelector(".button-2").style.display = "inline-block";
  document.querySelector(".button-3").style.display = "inline-block";
};

function download(e) {
  html2canvas(document.querySelector(".result"), {
    onrendered: function (canvas) {
      var screenshot = canvas.toDataURL("image/png");
      //sessionStorage.setItem(screenshot, canvas.toDataURL());
      localStorage.setItem("screenshot", screenshot);

      document.getElementById("textScreenshot").setAttribute("src", screenshot);
    },
  });

  if (e.target.classList.contains("button-2")) {
    window.location.href = `new.html?id=img`;
  }
}
function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
function loadIMG() {
  var dataURL = localStorage.getItem("screenshot");
  var img = new Image();
  img.src = dataURL;
  document.getElementById("signn").setAttribute("src", img.src);
}
function downloadd() {
  //console.log('hello')

  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
}
function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
function change(e) {
  console.log(e);
  if (e.target.classList.contains("button-3")) {
    
    document.querySelector(".result h1").style.fontFamily =
      getRandomItem(fonts);
  }
}

document.querySelector(".button").addEventListener("click", open);

document.querySelector(".container").addEventListener("click", function (e) {
  if (e.target.classList.contains("button-3")) {
    console.log(getRandomItem(fonts));
    document.querySelector(".result h1").style.fontFamily =
      getRandomItem(fonts);
  }
});
document.querySelector(".button-2").addEventListener("click", download);

document.body.addEventListener("DOMContentLoaded", loadIMG);

document.querySelector(".down").addEventListener("click", function (e) {
  console.log("hello");
  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
});
