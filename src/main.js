console.log('Hey Developer 😎');

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    prevScrollpos > currentScrollPos ? navbar.style.top = "0" : navbar.style.top = `-${navbar.offsetHeight}px`;
    prevScrollpos = currentScrollPos;
}


let sideNavOpen = false;

function toggleSideMenu() {
    sideNavOpen ? openNav() : closeNav();
    sideNavOpen = !sideNavOpen;
}

function openNav() {
    document.getElementById("hamburgerButton").classList.add('is-active');
    document.getElementById("sideMenu").style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("hamburgerButton").classList.remove('is-active');
    document.getElementById("sideMenu").style.width = "0";
    document.body.style.backgroundColor = "white";
}
