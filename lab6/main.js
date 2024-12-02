function one_to_ten_choice(id) {
  const container = document.getElementById(id);
  for (let i = 1; i <= 10; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.type = 'button';
    button.addEventListener('click', () => handleRatingSelection(id, i));
    container.appendChild(button);
  }
}

function handleRatingSelection(id, value) {
  const buttons = document.getElementById(id).children;
  Array.from(buttons).forEach((button) => button.classList.remove('selected'));
  buttons[value - 1].classList.add('selected');
  ratings[id] = value;
}

const ratings = {
  like_services: null,
  satisfaction: null,
  hello: null,
  tip: null,
  recommend: null,
};

['like_services', 'satisfaction', 'hello', 'tip', 'recommend'].forEach((id) =>
  one_to_ten_choice(id)
);

document.getElementById('submitButton').addEventListener('click', () => {
  const formData = {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    ratings,
  };

  console.log('Collected Data:', formData);
  alert('Data submitted');
});

const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
