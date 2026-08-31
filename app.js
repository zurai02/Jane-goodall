const flipCard = document.getElementById('flipCard');

if (flipCard) {
  flipCard.addEventListener('click', () => {
    const isOpen = flipCard.getAttribute('aria-expanded') === 'true';
    flipCard.setAttribute('aria-expanded', String(!isOpen));
  });

  flipCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flipCard.click();
    }
  });
}
