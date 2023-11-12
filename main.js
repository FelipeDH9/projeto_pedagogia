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
