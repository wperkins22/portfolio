let gcHead = document.getElementById("gaming-club-header");
let gcContent = document.getElementById("gaming-club-content");

let wbHead = document.getElementById("worm-burner-header");
let wbContent = document.getElementById("worm-burner-content");

let shHead = document.getElementById("scavenger-hunt-header");
let shContent = document.getElementById("scavenger-hunt-content");

function changeCursor(target) {
  target.style.cursor = "pointer";
}

gcHead.onmouseover = changeCursor(gcHead);

gcHead.onclick = function () {
  if (gcContent.style.display != "block") {
    gcContent.style.display = "block";
  } else {
    gcContent.style.display = "none";
  }
};

wbHead.onmouseover = changeCursor(wbHead);

wbHead.onclick = function () {
  if (wbContent.style.display != "block") {
    wbContent.style.display = "block";
  } else {
    wbContent.style.display = "none";
  }
};

shHead.onmouseover = changeCursor(shHead);

shHead.onclick = function () {
  if (shContent.style.display != "block") {
    shContent.style.display = "block";
  } else {
    shContent.style.display = "none";
  }
};
