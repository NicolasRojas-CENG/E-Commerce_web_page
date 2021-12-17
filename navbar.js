const navSlide = () => {
    const menu = document.querySelector('.Menu');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    menu.addEventListener('click', () =>{
        //Toggle the navbar.
        nav.classList.toggle('nav-active');

        //Animate the links in the navbar.
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        //Menu animation.
        menu.classList.toggle('toggle');
    });

}

navSlide();
