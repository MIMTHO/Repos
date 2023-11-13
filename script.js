 var firstHeading = document.getElementsByClassName("my-portfolio-intro");
 var myText = "Cool that you´re here!";


 firstHeading[0].addEventListener("click", function(){
     firstHeading[0].innerHTML = myText
     });

    
    
// var text ="Siffran är";
// var i = 0;

// while (i<10){
// text += "<br>Siffran är" + i;
//   i++;}

// document.getElementById("kladdSection").innerHTML=text;

// var myButton = document.getElementById("button");
// myButton.addEventListener("click" , function(){
// this.classList.toggle("unicorn");
// });



// var ux = ["<img class='vasttrafik-pics' src='img/köp periodbiljett färg efter (2).webp'alt='Picture of Västtrafiks To-Go app'>" , "<img class='vasttrafik-pics' src='img/köp periodbiljett färg efter (2).webp'alt='Picture of Västtrafiks To-Go app'>" , "<img class='vasttrafik-pics' src='img/köp periodbiljett färg efter (2).webp'alt='Picture of Västtrafiks To-Go app'>" , "<img class='vasttrafik-pics' src='img/köp periodbiljett färg efter (2).webp'alt='Picture of Västtrafiks To-Go app'>"];

// var arrayLength = ux.length;
// var myList = "<ul>";
// for (var i = 0; i < arrayLength; i++) {
// myList += "<li>" + ux[i] + "</li>";
// }
// myList += "</ul>";
// document.getElementById("minArraySection").innerHTML = myList;

// // JavaScript för att hantera bildloop och förstoring
// const images = ['img/träskstigen färg efter.webp', 'img/träskstigen färg efter.webp', 'img/träskstigen färg efter.webp', 'img/träskstigen färg efter.webp'];
// const imageContainer = document.getElementById('imageContainer');

// // Lägg till bilderna till DOM
// images.forEach((image, index) => {
//   const imgElement = document.createElement('img');
//   imgElement.src = image;
//   imgElement.alt = `Image ${index + 1}`;
//   imgElement.classList.add('image');
//   imageContainer.appendChild(imgElement);
// });

// // Funktion för att förstora bild 2 och 3
// function enlargeImages() {
//   const secondImage = document.querySelector('.image:nth-child(2)');
//   const thirdImage = document.querySelector('.image:nth-child(3)');

//   // Lägg till eller ta bort klassen 'enlarged' för att ändra storlek
//   secondImage.classList.toggle('enlarged');
//   thirdImage.classList.toggle('enlarged');
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }