// Smooth scroll to the next section
document.querySelectorAll('.to-next').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smooth scroll for "Start Now" button
document.querySelector('.cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.next').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#next-content-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.to-next').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#next-more-section').scrollIntoView({ behavior: 'smooth' });
});

// Highlight active link on navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        // Determine the current section in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for sticky navbar height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Add 'active' class to the appropriate nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

// แสดงป็อปอัปเมื่อกดปุ่ม ABOUT US
function openPopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'block';
    popup.style.display = 'flex';
}

// ซ่อนป็อปอัปเมื่อกดปุ่ม close now
function closePopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// ซ่อนป็อปอัปเมื่อคลิกบริเวณนอกป็อปอัป
document.getElementById('overlay').addEventListener('click', closePopup);

fetch('http://0.0.0.0:10000')
  .then(response => response.text())
  .then(data => {
    console.log(data);
  });
