import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_jAPlXiMJLi84T0aM7kAVrLCi2yGw3DPISDGS3Wwn43bYAlP3MAZUp4ZAfNTWzhmI";
const API_KEY =
  'live_jAPlXiMJLi84T0aM7kAVrLCi2yGw3DPISDGS3Wwn43bYAlP3MAZUp4ZAfNTWzhmI';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure(error.textContent);
      });
  }
  export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure(error.textContent);
      });
  }
  