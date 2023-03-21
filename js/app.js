const images = document.querySelectorAll('.property__image');

window.addEventListener('scroll', () => {
    let scroll = this.scrollY / -20;

    images.forEach(image => {
        if (scroll < -80) {
            scroll += 80; 
        }

        image.style.backgroundPositionY = `${scroll}px`;4
    });
});