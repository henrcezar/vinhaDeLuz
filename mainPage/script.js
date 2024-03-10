//Ride elements Function
let elementsOptions = document.querySelectorAll(".options")

elementsOptions.forEach(function (options) {
  options.addEventListener("click", function () {
    options.classList.toggle("active")
  })
})

//Modal Function Agenda
let modal = document.getElementById("myModal")
let img = document.getElementById("myImg")
let modalImg = document.getElementById("img01")
let captionText = document.getElementById("caption")
img.onclick = function () {
  modal.style.display = "block"
  modalImg.src = this.src
  captionText.innerHTML = this.alt
}
let span = document.getElementsByClassName("close")[0]
span.onclick = function () {
  modal.style.display = "none"
}