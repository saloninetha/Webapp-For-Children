let selectedOption = null;

const options = document.querySelectorAll('.option');
const answers = document.querySelectorAll('.answer');

options.forEach(option => {
    option.addEventListener('click', () => {
        if (selectedOption) {
            selectedOption.classList.remove('selected');
        }
        selectedOption = option;
        selectedOption.classList.add('selected');
    });
});

answers.forEach(answer => {
    answer.addEventListener('click', () => {
        if (selectedOption) {
            const selectedAnswer = answer;
            const optionValue = selectedOption.getAttribute('data-option');
            const answerValue = selectedAnswer.getAttribute('data-answer');
            if (optionValue === answerValue) {
                selectedOption.classList.add('correct');
                selectedAnswer.classList.add('correct');
            } else {
                selectedOption.classList.add('incorrect');
                selectedAnswer.classList.add('incorrect');
            }
            selectedOption.classList.remove('selected');
            setTimeout(() => {
                selectedOption.classList.remove('incorrect');
                selectedAnswer.classList.remove('incorrect');
                selectedOption = null;
            }, 1000);
        }
    });
});
