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
  .catch(error);

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