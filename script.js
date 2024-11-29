const accordions = document.querySelectorAll('.accordion-title');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        // Close any open accordion
        const openAccordion = document.querySelector('.accordion-content.open');
        if (openAccordion && openAccordion !== accordion.nextElementSibling) {
            openAccordion.classList.remove('open');
            openAccordion.style.display = 'none';
        }

        // Toggle the clicked accordion
        const content = accordion.nextElementSibling;
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            content.style.display = 'none';
        } else {
            content.classList.add('open');
            content.style.display = 'block';
        }
    });
});
