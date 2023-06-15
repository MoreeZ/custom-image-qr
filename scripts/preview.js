// Credit to Mohammad Akbar (https://codepen.io/mohammad-akbar63/pen/MWzwPja)
const imgPre = document.querySelector('[data-type="preview"]'),
  inpFile = document.querySelector("#file"),
  imgText = document.querySelector("span"),
  imgBox = document.querySelector(".pre-img-box");

inpFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    imgText.style.display = "none";
    imgPre.style.display = "block";

    reader.addEventListener("load", function () {
      imgPre.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  } else {
    imgText.style.display = null;
    imgPre.style.display = null;
    imgPre.setAttribute("src", "");
  }
});
