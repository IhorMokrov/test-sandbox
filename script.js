let burgerButton = document.getElementById('burger-button');
let backdropMenu = document.getElementById('navigation');

burgerButton.onclick = function () {

    if (backdropMenu.status !== 'open') {
    backdropMenu.style.opacity = 1;
        backdropMenu.style.pointerEvents = 'auto';  
        backdropMenu.style.transform = "translateY(100%)";
        backdropMenu.status = 'open';
        
    } 
    else {
         backdropMenu.style.opacity = 0.2;
        backdropMenu.style.pointerEvents = 'none';  
           backdropMenu.style.transform = "translateY(0%)";
    backdropMenu.status = 'closed';
    }
   
    
}