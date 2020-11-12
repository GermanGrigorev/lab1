let LOADER_COUNT = 0;

export const setIsLoading = (flag) => {
  const loader = document.getElementById('loader');
  if (flag) {
    LOADER_COUNT++;
  } else {
    LOADER_COUNT = LOADER_COUNT && LOADER_COUNT - 1;
  }
  if (LOADER_COUNT === 0) {
    loader.classList.add('Loader_hidden');
  }
  if (LOADER_COUNT === 1) {
    loader.classList.remove('Loader_hidden');
  }
};
