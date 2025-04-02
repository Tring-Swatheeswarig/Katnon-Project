const dropdownToggle = document.getElementById('navbarDropdownLang');
const dropdownMenu = document.getElementById('dropdownMenuLang'); // Assuming your dropdown menu has the ID 'dropdownMenuLang'

// Toggle language dropdown
if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior (important if it was an <a> tag)
        dropdownMenu.classList.toggle('show');
        dropdownToggle.setAttribute('aria-expanded', dropdownMenu.classList.contains('show'));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (dropdownMenu.classList.contains('show') && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', false);
        }
    });
}

// hamburger 

const hamburgerIcon = document.getElementById('hamburgerIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileCloseIcon = document.getElementById('mobileClosIconId');

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    hamburgerIcon.style.display = 'none';
    mobileCloseIcon.style.display = 'block';
});

mobileCloseIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerIcon.style.display = 'flex';
    mobileCloseIcon.style.display = 'none';
});



