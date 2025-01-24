document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) {
                ans.classList.remove('open');
                ans.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle the clicked FAQ
        answer.classList.toggle('open');
        button.classList.toggle('active');
    });
});