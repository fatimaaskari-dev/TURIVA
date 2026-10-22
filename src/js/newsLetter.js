export function setupNewsletter() {
    const form = document.querySelector("#newsletter-form");
    const email = document.querySelector("#newsletter-email");
    const message = document.querySelector("#newsletter-message");

    if (!form || !email || !message) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        message.textContent = "Thank you for subscribing!";
        message.className = "text-sm text-green-600";

        form.reset();
    });
}
