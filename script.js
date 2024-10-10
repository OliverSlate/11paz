document.addEventListener("DOMContentLoaded", function () {
    const initialTitle = document.getElementById('initial-title');
    const contentBoxes = document.getElementById('content-boxes');
    const textBoxes = document.querySelectorAll('.text-box');
    const darkModeContent = document.getElementById('dark-mode-content');
    const finalMessage = document.getElementById('final-message');
    const finalTitle = document.getElementById('final-title');
    const loveMeter = document.getElementById('love-meter'); // Reference to the love meter
    const loveLetter = document.getElementById('love-letter');
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
    document.getElementById('next-button-5').addEventListener('click', function () {
        nextBox(5);
    });
    document.getElementById('next-button-6').addEventListener('click', function () {
        nextBox(6);
    });
    document.getElementById('next-button-7').addEventListener('click', function () {
        nextBox(7);
    });
    document.getElementById('next-button-8').addEventListener('click', function () {
        nextBox(8);
    });
    document.getElementById('next-button-9').addEventListener('click', function () {
        nextBox(9);
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

        // Update the love meter value and its background color
        loveMeter.value = counter;
        updateLoveMeterColor(counter);

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
                loveLetter.classList.add('scroll'); // Show the love letter
            }, 1000); // Wait for fade-out before showing final message
        }
    });

    // Function to update the love meter's color from green to red
    function updateLoveMeterColor(value) {
        const percentage = (value / 20) * 100; // Calculate the percentage filled
        // Set the background to show a gradient on the filled part and black on the unfilled part
        loveMeter.style.background = `linear-gradient(to right, green 0%, yellow ${percentage / 2}%, red ${percentage}%, black ${percentage}% 100%)`;
    }
});