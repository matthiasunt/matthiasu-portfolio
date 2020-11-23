console.log('Hey Developer 😎');

window.onscroll = () => {
    const scrollOffset = window.pageYOffset + window.innerHeight;

    const socialLinks = document.getElementById('social-links');
    if (document.documentElement.scrollHeight - scrollOffset < 80) {
        socialLinks.classList.add('hide');
    } else {
        socialLinks.classList.remove('hide');
    }
}

