// ======================================================
// Example 1: height and width
// ======================================================

window.addEventListener("load", function () {
  const arrImgs = new Array(3);

  arrImgs[0] = document.getElementById("image1");
  arrImgs[1] = document.getElementById("image2");
  arrImgs[2] = document.getElementById("image3");

  let strOutput = document.getElementById("output");
  let strHtml = "<ul>";

  for (let i = 0; i < arrImgs.length; i++) {
    strHtml +=
      "<li>image" +
      (i + 1) +
      ": height=" +
      arrImgs[i].height +
      ", width=" +
      arrImgs[i].width +
      ", style.height=" +
      arrImgs[i].style.height +
      ", style.width=" +
      arrImgs[i].style.width +
      "</li>";
  }

  strHtml += "</ul>";

  strOutput.innerHTML = strHtml;
});
