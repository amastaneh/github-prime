document.addEventListener('DOMContentLoaded', function () {
    const switches = document.querySelectorAll('.switch input[type="checkbox"]');
    switches.forEach(switchEl => {
        const question = switchEl.getAttribute('data-question');
        const storedValue = localStorage.getItem(question) === 'true';
        switchEl.checked = storedValue;
        switchEl.addEventListener('change', function () {
            localStorage.setItem(question, this.checked);
        });
    });
});
