// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Hover Effects
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = "#f39c12";
    });
    item.addEventListener('mouseout', function() {
        this.style.color = "";
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    document.querySelectorAll('input[required], textarea[required]').forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    if (valid) {
        // Submit the form
        this.submit();
    }
});
