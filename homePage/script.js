document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('924XrSyc8ytopc8A0');
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.className = 'form-status';
        status.textContent = 'Sending your message...';

        emailjs.sendForm('hannah@17', 'template_g0qw3ng', this)
            .then(function () {
                status.classList.add('success');
                status.textContent = 'Message sent! Thank you. Expect a reply soon.';
                form.reset();
            }, function (error) {
                status.classList.add('error');
                status.textContent = 'Sorry, the form can\'t send right now. Please try again later.';
                console.error('EmailJS send error:', error);
            });
    });
});