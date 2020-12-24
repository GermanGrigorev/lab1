import { serverApi } from '../../../api/serverApi';
import { setIsLoading } from '../../loader/loader';

export const deleteSelectedCity = async (cityName) => {
  setIsLoading(true);
  const cities = await serverApi.getFavourites();

  if (cities.find(({name}) => name === cityName)) {
    await serverApi.deleteFavourites(cityName);
    const ul = document.getElementById("SelectedList");
    const list = ul.querySelectorAll('.SavedCity');

    console.log (list.values());
    const cityNode = Object.values(list).find( (node) => {
      const title = node.querySelector('.SavedCity-Title');
      return title.textContent === cityName;
    });
    cityNode.remove();
  }
  setIsLoading(false);
};
