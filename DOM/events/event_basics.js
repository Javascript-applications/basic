document.getElementById("natureRoot").addEventListener(
  "click",
  (e) => {
    console.log("Clicked inside of natureRoot");
  },
  false
);

document.getElementById("nature1").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Clicked in nature1");
  },
  false
);

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    console.log("google link clicked");
    e.preventDefault();
    e.stopPropagation();
  },
  false
);

document.querySelector("#natureRoot").addEventListener(
  "click",
  function (e) {
    let tag = e.target.tagName;
    if (tag == "IMG") {
      let removeIt = e.target.parentNode;
      removeIt.remove();
      // removeIt.parentNode.removeChild(removeIt);
      console.log("removeIt", removeIt);
    }
  },
  false
);
