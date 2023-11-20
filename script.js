let burgerButton = document.getElementById('burger-button');
let backdropMenu = document.getElementById('navigation');

burgerButton.addEventListener('click', function () {

    if (backdropMenu.isOpen !== true) {
        backdropMenu.style.opacity = 1;
        backdropMenu.style.pointerEvents = 'auto';
        backdropMenu.style.transform = "translateY(100%)";
         backdropMenu.style.zIndex = 3;
        backdropMenu.isOpen = true;
        
    }
    else {
        backdropMenu.style.opacity = 0.2;
        backdropMenu.style.pointerEvents = 'none';
        backdropMenu.style.transform = "translateY(0%)";
        backdropMenu.style.zIndex = 2;
        backdropMenu.isOpen = false;
    }
})
    
