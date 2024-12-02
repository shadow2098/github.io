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

function validateForm(formData) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const phonePattern = /^\+?\d{1,4}(?:[ ]\d{1,4}){1,4}$/;
    if (!phonePattern.test(formData.phone)) {
        alert('Please enter a valid phone number (e.g., +111 111 11 111).');
        return false;
    }

    if (formData.address.trim() === '') {
        alert('Please enter a valid address.');
        return false;
    }
    return true;
}

function displayResults(formData) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    for (const key in formData) {
        if (key === 'ratings') continue;
        const field = document.createElement('p');
        field.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${formData[key]}`;
        resultDiv.appendChild(field);
  }

    const ratingsList = document.createElement('ul');
    ratingsList.textContent = 'Ratings:';
    for (const question in formData.ratings) {
        const item = document.createElement('li');
        item.textContent = `${question.charAt(0).toUpperCase() + question.slice(1)}: ${formData.ratings[question]}`;
        ratingsList.appendChild(item);
    }
    resultDiv.appendChild(ratingsList);

    const numericValues = Object.values(formData.ratings).filter((value) => value !== null);
    const average = numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length;
    const averageField = document.createElement('p');
    averageField.textContent = `${formData.firstName} ${formData.lastName} (${formData.email}): ${average.toFixed(2)}`;
    resultDiv.appendChild(averageField);
}

document.getElementById('submitButton').addEventListener('click', () => {
    const formData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        ratings,
    };

    if (!validateForm(formData)) {
    return;
    }

    console.log('Collected Data:', formData);
    alert('Data submitted');
    displayResults(formData)
});

const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});