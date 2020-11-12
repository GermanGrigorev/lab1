export const setError = (message = "Что-то пошло не так") => {
  const error = document.getElementById('error');
  error.textContent = message;
  error.classList.remove('Error_hidden');
  setTimeout(() => error.classList.add('Error_hidden'), 3000);
};
