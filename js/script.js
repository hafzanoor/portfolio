// =========================
// TYPED.JS ANIMATION
// =========================
document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed('#typed', {
        strings: ["Hafza Noor", "a Freelancer", "a Data Analyst"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector("#hero");

    if (window.scrollY > hero.offsetHeight - 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// =========================
// SMOOTH SCROLL FOR NAV LINKS
// =========================
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 70, // adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const btn = document.getElementById('submit-btn');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const data = new FormData(form);

        // UI changes while sending
        btn.innerHTML = "Sending...";
        btn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.classList.add("show");
                status.innerHTML = "✅ Message sent successfully!";
                status.style.color = "#20c997";

                form.reset();

            } else {
                status.style.display = "block";
                status.innerHTML = "❌ Failed to send message!";
                status.style.color = "red";
            }

        } catch (error) {
            status.style.display = "block";
            status.innerHTML = "❌ Network error!";
            status.style.color = "red";
        }

        // Reset button
        btn.innerHTML = "Send Message";
        btn.disabled = false;

        // Auto hide message
        setTimeout(() => {
            status.style.display = "none";
        }, 3000);

    });

});