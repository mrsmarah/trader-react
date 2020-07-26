import axios from 'axios';
const API = process.env.API_URL || 'https://trader401.herokuapp.com';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhemFuIiwiX2lkIjoiNWVmMzBjODM4YTMzZjYwNjE5NTIwN2M2Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE1OTI5ODY3NTUsImV4cCI6MTU5MzA3MzE1NX0.HHbXRg-pvfpzXETPIe_6xjG4mx61UFHrGZjiVZyH0jA';

export const statusPost = () => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${token}` },
    cache: 'no-cache',
  };
  axios.get(`${API}/status`, options).then(res => {
    console.log('res >>>>', res);
  });
};





