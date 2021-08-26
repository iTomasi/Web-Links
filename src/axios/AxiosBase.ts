import Axios from "axios";

const api = "http://localhost:3000";

const AxiosBase = Axios.create({
    baseURL: api,
});

export default AxiosBase;
