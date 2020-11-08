const menu=document.querySelector('.menu-toggle input');
const nav=document.querySelector('nav ul');
const heartIcon=document.querySelector('.heart-icon');

menu.addEventListener('click', () => {
	nav.classList.toggle('slide');
});

heartIcon.addEventListener('click', () => {
	heartIcon.classList.toggle('change-bg');
});
