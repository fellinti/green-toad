// Select the photo element
const photo = document.querySelector(".photo");

// Add a click event listener to the photo
photo.addEventListener("click", function () {
  // Toggle the class to make the photo appear or disappear when clicked
  photo.classList.toggle("hidden");
});
