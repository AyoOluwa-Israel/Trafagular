const icons = document.querySelector('.icon');
const linkContainer= document.querySelector('.link-container');


  icons.addEventListener('click', function(){
    icons.classList.toggle("open");
    linkContainer.classList.toggle("burger");
  });


