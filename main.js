var input = document.querySelector(".search-bar input");

input.onfocus = function() {
  this.placeholder = "";
  document.querySelector(".description").scrollIntoView();
}

input.onblur = function() {
  this.placeholder = "Search in the city";
}