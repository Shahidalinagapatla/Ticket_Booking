document.querySelectorAll('.select-event').forEach(button => {
    button.addEventListener('click', function () {
        const selectedEvent = this.getAttribute('data-event');
        document.getElementById('selectedEvent').textContent = selectedEvent;
        document.getElementById('bookingForm').style.display = 'block';
        document.getElementById('confirmationMessage').style.display = 'none';
    });
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;
    const selectedEvent = document.getElementById('selectedEvent').textContent;

    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Simulate sending an email
    sendConfirmationEmail(name, email, tickets, selectedEvent);
});

function sendConfirmationEmail(name, email, tickets, event) {
    console.log(`Confirmation email sent to ${email} for ${tickets} tickets to ${event}.`);
    alert(`Confirmation email sent to ${email} for ${tickets} tickets to ${event}.`); // Mock email sending
}
