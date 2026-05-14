  document.addEventListener('DOMContentLoaded', function() {
            const counterParagraph = document.getElementById('counter');
            const incrementButton = document.getElementById('incrementBtn');

            if (!counterParagraph || !incrementButton) {
                console.error("Required elements with id 'counter' or 'incrementBtn' not found.");
                return;
            }
            let currentValue = 0;
            function updateCounterDisplay() {
                counterParagraph.textContent = currentValue;
            }

            updateCounterDisplay();
            incrementButton.addEventListener('click', function() {
                const valueBeforeIncrement = currentValue;
                // alert(valueBeforeIncrement); 

                currentValue = currentValue + 1;

                updateCounterDisplay();
            });
        });