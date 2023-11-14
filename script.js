let burgerButton = document.getElementById('burger-button');
let backdropMenu = document.getElementById('navigation');

burgerButton.onclick = function () {

    backdropMenu.style.opacity = 1;
    backdropMenu.style.pointerEvents = 'auto';  
    backdropMenu.style.top = '100%';
   
    
}