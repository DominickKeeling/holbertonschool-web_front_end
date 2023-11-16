function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'cpitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const p = document.createElement('p');
  p.textContent = 'Welcom Holberton!';
  document.body.appendChild(p);

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onClick = spooky;
  document.body.appendChild(spookyButton);

  const darkModeBtn = document.createElement('button');
  darkModeBtn.textContext = 'Dark mode';
  darkModeBtn.onClick = darkMode;
  document.body.appendChild(darkModeBtn);

  const btnScreamMode = document.createElement('button');
  btnScreamMode.textContext = 'Scream mode';
  btnScreamMode.onClick = screamMode;
  document.body.appendChild(btnScreamMode);
}

main();