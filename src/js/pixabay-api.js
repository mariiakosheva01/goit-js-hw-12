import axios from 'axios';


const API_KEY = '56144354-a08717fc8df2b40204429c095'; 
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}