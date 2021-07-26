var dateMother = new Date();
var dateToday = dateMother.getUTCDate();
var dateYear = dateMother.getUTCFullYear();
var dateMonth = dateMother.getUTCMonth();
var divShow = document.querySelector('#showMe');



function showImage(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  
  divShow.appendChild(img);
}

function showq6() {
  if (
    (dateToday >= 22 && dateMonth == 12) ||
    (dateToday <= 21 && dateMonth == 3)
  ) {
    divShow.innerText = 'Verão';
    showImage('./imgs/summer.jpg', 100, 100, 'Summer')
  }else  if (
    (dateToday >= 22 && dateMonth == 6) ||
    (dateToday <= 21 && dateMonth == 9)
  ) {
    divShow.innerText = 'Inverno';
    showImage('./imgs/winter.jpg', 100, 100, 'Winter')
  }else   if (
    (dateToday >= 22 && dateMonth == 9) ||
    (dateToday <= 21 && dateMonth == 12)
  ) {
    divShow.innerText = 'Primavera';
    showImage('./imgs/spring.jpg', 100, 100, 'Spring')
  }else  if (
    (dateToday >= 22 && dateMonth == 3) ||
    (dateToday <= 21 && dateMonth == 6)
  ) {
    divShow.innerText = 'Outono';
    showImage('./imgs/autumn.jpg', 100, 100, 'Autumn')
  }

}
showq6();





