// Function to initialize switches based on localStorage
function initializeSwitches() {
    const switches = document.querySelectorAll('.switch input');

    switches.forEach((sw) => {
        const question = sw.getAttribute('data-question');
        const storedValue = localStorage.getItem(question);

        if (storedValue === null) {
            // Default value is true
            localStorage.setItem(question, 'true');
            sw.checked = true;
        } else {
            sw.checked = storedValue === 'true';
        }

        // Add event listener to update localStorage on change
        sw.addEventListener('change', (event) => {
            localStorage.setItem(question, event.target.checked);
        });
    });
}

// Call the initialize function on page load
document.addEventListener('DOMContentLoaded', initializeSwitches);
