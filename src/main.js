console.log('Hey Developer 😎');

let prevScrollPosition = window.pageYOffset;
window.onscroll = () => {
    const currentScrollPosition = window.pageYOffset;
    // const navbar = document.getElementById("navbar");
    // prevScrollPosition > currentScrollPosition ? navbar.style.top = "0" : navbar.style.top = `-${navbar.offsetHeight}px`;
    prevScrollPosition = currentScrollPosition;
    const body = document.body,
        html = document.documentElement;

    // console.log(window.outerHeight, window.pageYOffset)
    // const height = Math.max(body.scrollHeight, body.offsetHeight,
    //     html.clientHeight, html.scrollHeight, html.offsetHeight);
    // const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    // console.log(scrollPos);
    // console.log(window.pageYOffset, document.documentElement.scrollHeight);
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
