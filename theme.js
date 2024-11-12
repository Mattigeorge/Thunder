const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Dark Mode';
darkModeButton.style.marginTop = '10px';
darkModeButton.style.padding = '8px 16px';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.backgroundColor = '#333';
darkModeButton.style.color = '#fff';
document.querySelector('header').appendChild(darkModeButton);

// Växla mellan mörkt och ljust läge när knappen klickas
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});