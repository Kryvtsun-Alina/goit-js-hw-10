import axios from "axios";
import SlimSelect from "slim-select";
import Notiflix from "notiflix";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
const { select, catInfo, loader, error } = refs;

select.classList.add('hidden');
error.classList.add('hidden');
loader.style.display = 'block';

fetchBreeds()
  .then(breeds => onSelected(breeds))
  .catch(onError);

function onSelected(breeds) {
  const options = breeds.map(({ id, name }) => ({
    text: name,
    value: id,
  }));
  const slimSelect = new SlimSelect({
    select: select,
  });
  slimSelect.setData(options);
  loader.style.display = 'none';
}

function onError(err) {
  loader.style.display = 'none';
  Notiflix.Notify.failure(error.textContent);
}

let isFirstLoad = true;
select.addEventListener('change', e => {
  if (isFirstLoad) {
    return (isFirstLoad = false);
  }
  catInfo.innerHTML = '';
  loader.style.display = 'block';
  const breedId = select.value;

  fetchCatByBreed(breedId)
    .then(cats => {
      loader.style.display = 'none';
      const catMarkup = createCatMarkup(cats);
      catInfo.insertAdjacentHTML('beforeend', catMarkup);
    })
    .catch(onError);
});

function createCatMarkup(cats) {
  return cats
    .map(cat => {
      return `
        <img class="picture" src="${cat.url}" width="360" />
        <div class="cat-container">
            <h1 class="title">${cat.breeds[0].name}</h1>
            <p class="desc">${cat.breeds[0].description}</p>
            <p class="temper"><b>Temperament: </b>${cat.breeds[0].temperament}</p>
        </div>
      `;
    })
    .join('');
}

