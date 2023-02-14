import axios from 'axios';


export function setupAPIClient() {
  const api = axios.create({
    baseURL: 'https://www.zippia.com/api/jobs/',
  });

  return api;
}