// Selecting elements
const heading = document.querySelector('.hero-content h1');
console.log(heading)

const navLinks = document.querySelectorAll('.nav-list a')
console.log(navLinks)

const btn = document.querySelector('.btn')
console.log(btn);

const header = document.querySelector('.header');
console.log(header)

const heroContent = document.querySelector('.hero-content');
console.log(heroContent)

// Styling elements
header.style.backgroundColor = '#b5651d';

heading.style.fontSize = '3rem'

navLinks.forEach((link) => link.style.color = '#faf0e6')

// Creating and Adding elements

const p = document.createElement('p');
p.textContent = 'Open daily from 7 AM to 9 PM.';
p.style.backgroundColor = 'red';
p.style.padding = '0.5rem';
p.style.borderRadius = '1rem';

heroContent.appendChild(p);