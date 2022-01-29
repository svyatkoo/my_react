import axios from "axios";

export default axios.create({
    baseURL: "http://91.201.233.14/api/v2/cars",
});