
export function setupContactForm() {
    const form = document.querySelector(".contactForm");
    const nextBtn = document.querySelector(".contactNext");

    if (!form || !nextBtn) return;

    // NEXT button
    nextBtn.addEventListener("click", () => {
        const firstName = form.elements.firstname;
        const lastName = form.elements.lastname;
        const email = form.elements.email;

        if (!firstName.reportValidity()) return;
        if (!lastName.reportValidity()) return;
        if (!email.reportValidity()) return;

        const interests = form.querySelectorAll(
            'input[name="interest"]:checked'
        );

        const travelType = form.querySelector(
            'input[name="travel-type"]:checked'
        );

        if (interests.length === 0) {
            alert("Please select at least one interest.");
            return;
        }

        if (!travelType) {
            alert("Please select your travel type.");
            return;
        }

        const message = form.elements.message;

        if (!message.reportValidity()) return;

        alert("All fields are valid. You can submit your form.");
    });

    // SUBMIT button
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);

        const contactData = {
            firstName: formData.get("firstname").trim(),
            lastName: formData.get("lastname").trim(),
            email: formData.get("email").trim(),
            interests: formData.getAll("interest"),
            travelType: formData.get("travel-type"),
            message: formData.get("message").trim()
        };

        console.log(contactData);

        alert("Your form has been validated successfully!");
    });
}