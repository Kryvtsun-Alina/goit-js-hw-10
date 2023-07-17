import axios from "axios";
import Notiflix from "notiflix";

const API_KEY = "live_jAPlXiMJLi84T0aM7kAVrLCi2yGw3DPISDGS3Wwn43bYAlP3MAZUp4ZAfNTWzhmI";
axios.defaults.headers.common["x-api-key"] = API_KEY;

const BASE_URL = "https://api.thecatapi.com/v1";

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure(error.textContent);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure(error.textContent);
    });
};