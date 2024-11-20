
    // Toggle Dark/Light Mode
    function toggleMode() {
      const body = document.body;
      const modeButton = document.querySelector('.mode-toggle i');

      if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        modeButton.classList.replace('fa-moon', 'fa-sun'); // Sun icon for light mode
      } else {
        body.classList.replace('light-mode', 'dark-mode');
        modeButton.classList.replace('fa-sun', 'fa-moon'); // Moon icon for dark mode
      }
    }
