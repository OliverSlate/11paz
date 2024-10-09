document.addEventListener("DOMContentLoaded", function () {
    const initialTitle = document.getElementById('initial-title');
    const contentBoxes = document.getElementById('content-boxes');
    const textBoxes = document.querySelectorAll('.text-box');
    const darkModeContent = document.getElementById('dark-mode-content');
    const finalMessage = document.getElementById('final-message');
    const finalTitle = document.getElementById('final-title');
    let currentBox = 0;
    let counter = 0;

    // After initial title fades out, show the first text box with fade-in
    setTimeout(() => {
        initialTitle.classList.add('hidden');
        contentBoxes.classList.remove('hidden');
        showBox(currentBox);
    }, 3000);

    // Handle 'Dalej' button clicks to go through text boxes
    document.getElementById('next-button').addEventListener('click', function () {
        nextBox(1);
    });

    document.getElementById('next-button-2').addEventListener('click', function () {
        nextBox(2);
    });

    document.getElementById('next-button-3').addEventListener('click', function () {
        nextBox(3);
    });

    document.getElementById('next-button-4').addEventListener('click', function () {
        nextBox(4);
    });

    // Function to fade out the current box and fade in the next
    function nextBox(index) {
        fadeOutBox(currentBox); // Fade out the current box
        setTimeout(() => {
            currentBox = index;
            if (currentBox < textBoxes.length) {
                showBox(currentBox); // Fade in the next box after the current one fades out
            } else {
                // Transition to dark mode
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
                contentBoxes.classList.add('hidden');
                darkModeContent.classList.remove('hidden');
            }
        }, 1000); // Delay to allow fade-out animation to complete
    }

    // Function to fade in a text box
    function showBox(index) {
        textBoxes[index].classList.remove('hidden');
        textBoxes[index].classList.add('fade-in');
    }

    // Function to fade out a text box
    function fadeOutBox(index) {
        textBoxes[index].classList.add('fade-out');
        setTimeout(() => {
            textBoxes[index].classList.remove('fade-in');
            textBoxes[index].classList.remove('fade-out');
            textBoxes[index].classList.add('hidden');
        }, 1000); // Wait for fade-out to finish before hiding
    }

    // Counter button logic
    const counterButton = document.getElementById('counter-button');
    const counterDisplay = document.getElementById('counter');

    counterButton.addEventListener('click', function () {
        counter++;
        counterDisplay.textContent = counter;

        // Fade out current text at 5 clicks, then fade in new text
        if (counter === 5) {
            finalTitle.classList.add('fade-out');
            setTimeout(() => {
                finalTitle.textContent = "I'm a broken rose";  // Change the text
                finalTitle.classList.remove('fade-out');
                finalTitle.classList.add('fade-in');
            }, 1000);  // Wait for fade-out before changing the text
        }

        // Show final message at 20 clicks
        if (counter >= 20) {
            darkModeContent.classList.add('fade-out');
            setTimeout(() => {
                darkModeContent.classList.add('hidden');
                finalMessage.classList.remove('hidden');
                finalMessage.classList.add('fade-in');
            }, 1000); // Wait for fade-out before showing final message
        }
    });
});
