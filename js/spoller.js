var acc = document.getElementsByClassName("spoller");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var spollerContent = this.nextElementSibling;
    if (spollerContent.style.maxHeight){
        spollerContent.style.maxHeight = null;
    } else {
        spollerContent.style.maxHeight = spollerContent.scrollHeight + "px";
    } 
  });
}