const tagButtons = document.querySelectorAll('.tag-button');

tagButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        tagButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });
    });
});
