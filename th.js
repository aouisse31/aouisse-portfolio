function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(sec => sec.classList.toggle('dark-mode'));
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');

  }