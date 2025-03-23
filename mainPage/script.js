import { Modal } from "./Modal.js"

//Ride elements Function
let elementsOptions = document.querySelectorAll(".options")

elementsOptions.forEach(function (options) {
  options.addEventListener("click", function () {
    options.classList.toggle("active")
  })
})

//Modal Function Agenda
let modal1 = document.getElementById("myModal1")
let img1 = document.getElementById("myImg1")
let modalImg1 = document.getElementById("img01")
let captionText1 = document.getElementById("caption1")

let modal01 = new Modal()
modal01.modalId = modal1
modal01.imgId = img1
modal01.modalImgId = modalImg1
modal01.captionTextId = captionText1
modal01.click()

let modal2 = document.getElementById("myModal2")
let img2 = document.getElementById("myImg2")
let modalImg2 = document.getElementById("img02")
let captionText2 = document.getElementById("caption2")

let modal02 = new Modal()
modal02.modalId = modal2
modal02.imgId = img2
modal02.modalImgId = modalImg2
modal02.captionTextId = captionText2
modal02.click()

let modal3 = document.getElementById("myModal3")
let img3 = document.getElementById("myImg3")
let modalImg3 = document.getElementById("img03")
let captionText3 = document.getElementById("caption3")

let modal03 = new Modal()
modal03.modalId = modal3
modal03.imgId = img3
modal03.modalImgId = modalImg3
modal03.captionTextId = captionText3
modal03.click()

let modal4 = document.getElementById("myModal4")
let img4 = document.getElementById("myImg4")
let modalImg4 = document.getElementById("img04")
let captionText4 = document.getElementById("caption4")

let modal04 = new Modal()
modal04.modalId = modal4
modal04.imgId = img4
modal04.modalImgId = modalImg4
modal04.captionTextId = captionText4
modal04.click()

let span1 = document.getElementsByClassName("close1")[0]
span1.onclick = function () {
  modal1.style.display = "none"
}

let span2 = document.getElementsByClassName("close2")[0]
span2.onclick = function () {
  modal2.style.display = "none"
}

let span3 = document.getElementsByClassName("close3")[0]
span3.onclick = function () {
  modal3.style.display = "none"
}

let span4 = document.getElementsByClassName("close4")[0]
span4.onclick = function () {
  modal4.style.display = "none"
}
