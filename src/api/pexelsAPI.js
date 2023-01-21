import axios from "axios";

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default axios.create({
  baseURL: 'https://pexelsdimasv1.p.rapidapi.com',
  headers: {
    Authorization: API_KEY,
    'X-RapidAPI-Key': '700f3ec77amsh374abf9e06a720bp1363e1jsnbf5dead5ff88',
    'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
  },
})