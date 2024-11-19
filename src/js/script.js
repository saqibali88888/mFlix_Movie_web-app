
// Toggle Dark/Light Mode
function toggleMode() {
  const body = document.body;
  const modeButton = document.querySelector('.mode-toggle');

  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    modeButton.textContent = '🌞'; // Sun icon for light mode
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    modeButton.textContent = '🌙'; // Moon icon for dark mode
  }
}
