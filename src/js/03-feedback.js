import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

// functia care salveaza datele formularului in local storage
const saveData = () => {
  const formData = new FormData(form);
  const savedData = {};
  formData.forEach((value, key) => (savedData[key] = value));
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(savedData));
};

// functia care populeaza formularul cu datele salvate
const populateForm = () => {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
};

// functia care gestioneaza trimiterea formularului
const handleSubmit = event => {
  event.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  console.log(savedData);
  localStorage.removeItem(FEEDBACK_KEY);
  form.reset();
};

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', populateForm);
