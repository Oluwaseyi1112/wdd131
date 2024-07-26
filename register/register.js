// Initialize participant count
let currentCount = 1;

// Function to generate HTML for a participant section
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="participant${count}-name">Participant Name:</label>
            <input type="text" id="participant${count}-name" name="participant${count}-name" required>

            <label for="participant${count}-fee">Fee:</label>
            <input type="number" id="participant${count}-fee" name="participant${count}-fee" required>
        </section>
    `;
}

// Function to add a new participant
function addParticipant() {
    currentCount++;
    const newParticipantHTML = participantTemplate(currentCount);
    document.querySelector('#participants').insertAdjacentHTML('beforebegin', newParticipantHTML);
}

// Function to calculate total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=participant][id$=-fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, elem) => total + parseFloat(elem.value || 0), 0);
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    const adultName = document.querySelector('#adult-name').value;
    const numberOfParticipants = document.querySelectorAll('[id^=participant]').length;
    const totalFee = totalFees();

    // Hide the form and show the summary
    document.querySelector('#registration-form').style.display = 'none';
    document.querySelector('#summary').style.display = 'block';
    document.querySelector('#summary').innerHTML = successTemplate({
        name: adultName,
        participants: numberOfParticipants,
        total: totalFee
    });
}

// Function to generate HTML for the success message
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.total}.`;
}

// Add event listeners when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add-participant-button').addEventListener('click', addParticipant);
    document.querySelector('#registration-form').addEventListener('submit', submitForm);
});
