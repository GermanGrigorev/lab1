export const setIsLoading = (flag) => {
  const loader = document.getElementById('loader');
  if (flag) {
    loader.classList.remove('Loader__hidden');
  } else {
    loader.classList.add('Loader__hidden');
  }
};
