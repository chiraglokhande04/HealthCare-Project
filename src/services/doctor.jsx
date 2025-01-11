import axios from 'axios'
async function createDoctor(data) {
  const res = await axios.post('https://ask-epa-opera-rainbow.trycloudflare.com/user/signup', data);
  return res.data;
}
async function login(data) {
    const res = await axios.post('https://ask-epa-opera-rainbow.trycloudflare.com/doctors/user/login', data);
    return res.data
}
export {createDoctor,login}