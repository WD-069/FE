// Header
const header = document.createElement('header');
header.classList.add('header');

const nav = document.createElement('nav');
nav.classList.add('nav');

const logo = document.createElement('a');
logo.href = '#';
logo.classList.add('logo');
logo.textContent = 'Coffee Shop';

const navList = document.createElement('ul');
navList.classList.add('nav-link');

const navItems = ['Home', 'Menu', 'About', 'Contact'];
navItems.forEach((link) => {
    const navItem =  document.createElement('li');
    navItem.classList.add('nav-item');

    const navLink = document.createElement('a');
    navLink.href = '#';
    navLink.textContent = link;

    navItem.appendChild(navLink);
    navList.appendChild(navItem)
})

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);
document.body.appendChild(header);

// Hero section
const hero = document.createElement('section')
hero.classList.add('hero');

const heroContent = document.createElement('div')
heroContent.classList.add('hero-content');

const heroHeading = document.createElement('h1')
heroHeading.textContent = 'Welcome to Our Coffee Shop';

const heroText = document.createElement('p')
heroText.textContent = 'Enjoy the best coffee in town.';

const heroButton = document.createElement('a')
heroButton.href = '#';
heroButton.classList.add('btn');
heroButton.textContent = 'Explore Our Menu';

heroContent.appendChild(heroHeading)
heroContent.appendChild(heroText)
heroContent.appendChild(heroButton)

hero.appendChild(heroContent)

document.body.appendChild(hero);

// Footer
const footer = document.createElement('footer');
footer.classList.add('footer')

const footerText = document.createElement('p');
footerText.textContent = '© 2024 Coffee Shop. All rights reserved.'

footer.appendChild(footerText);

document.body.appendChild(footer);

// Styling

//Header styling
header.style.backgroundColor = '#fff';
header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
header.style.padding = '1rem 0'

// Nav styling
nav.style.display = 'flex';
nav.style.justifyContent ='space-between'
nav.style.alignItems = 'center'
nav.style.maxWidth = '1200px'
nav.style.margin = '0 auto';
nav.style.padding = '0 1rem'

// Logo
logo.style.fontSize = '1.5rem';
logo.style.fontWeight = 'bold';
logo.style.color = '#333';
logo.style.textDecoration = 'none';

// Nav-list style
navList.style.display = 'flex';
navList.style.listStyle = 'none';

// Nav-items
document.querySelectorAll('.nav-item').forEach((navItem) => navItem.style.marginLeft = '1.5rem');

// Anchor tags style
document.querySelectorAll('.nav-item a').forEach((link) => {
    link.style.textDecoration = 'none';
    link.style.color = '#333';
    link.style.fontWeight = 'bold'
})