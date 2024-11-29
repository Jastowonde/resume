// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
// Scroll sections
let sections = document.querySelectorAll('section');
let nabar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	nabar.classList.toggle('active');
}
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
           document.querySelector('header nav a[href="' + '#' + id + '"]').classList.add('active'); });
			
			sec.classList.add('show-animate');
			
        }
		else{
			sec.classList.remove('show-animate');
		}
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
	
	menuIcon.classList.remove('bx-x');
	nabar.classList.remove('active');
	
	let footer = document.querySelector('footer');
	
	footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}





