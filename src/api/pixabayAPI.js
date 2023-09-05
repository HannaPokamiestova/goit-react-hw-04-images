import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36660815-e6e20e8460ba8bd16a81efb15';

export const fetchImages = async (searchQuery, page) => {
  const url = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios.get(url);
  return data;
};
