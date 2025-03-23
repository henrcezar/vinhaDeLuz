//Ride elements Function
let elementsOptions = document.querySelectorAll(".options")

elementsOptions.forEach(function (options) {
  options.addEventListener("click", function () {
    options.classList.toggle("active")
  })
})
