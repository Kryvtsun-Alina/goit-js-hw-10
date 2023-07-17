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