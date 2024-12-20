document.addEventListener("DOMContentLoaded", () => {
    const eventDropdown = document.getElementById("eventDropdown");
    const ticketForm = document.getElementById("ticketForm");
    const ticketDetails = document.getElementById("ticketDetails");
    const confirmation = document.getElementById("confirmation");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Show ticket form only when an event is selected
    eventDropdown.addEventListener("change", () => {
        if (eventDropdown.value) {
            ticketDetails.style.display = "block";
        } else {
            ticketDetails.style.display = "none";
        }
    });

    // Handle form submission
    ticketForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const quantity = document.getElementById("quantity").value;
        const eventName = eventDropdown.options[eventDropdown.selectedIndex].text;

        confirmationMessage.innerHTML = `
            Thank you, <strong>${name}</strong>! Your booking for 
            <strong>${quantity}</strong> ticket(s) to <strong>${eventName}</strong> 
            has been confirmed. A confirmation email has been sent to 
            <strong>${email}</strong>.
        `;
        confirmation.hidden = false;
        ticketForm.reset();
        ticketDetails.style.display = "none";
    });
});
