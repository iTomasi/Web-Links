import Axios from "axios";

//const api = "http://localhost:3000"
const api = "https://web-links-itomasi.vercel.app";

const AxiosBase = Axios.create({
    baseURL: api,
});

export default AxiosBase;
