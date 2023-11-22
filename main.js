//Back To Top Button
function backTop(){
    const buttonTop = document.querySelector('.back-to-top');
    if (window.scrollY >= 300) {
      buttonTop.classList.add('show')
    }
    else {
      buttonTop.classList.remove('show')
    }
  };
  
window.addEventListener('scroll', function() {
    backTop()
});


// iniciar o popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// PROPOSTAS COLLAPSIBLES
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}