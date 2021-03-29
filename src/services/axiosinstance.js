import axios from "axios";
const options = {};
options.withCredentials = true;
options.baseURL = 'http://localhost:2115/';
const instance = axios.create(options);
export default instance;


