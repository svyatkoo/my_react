import axios from "axios";

import {carsURL, usersURL} from "../configs/urls";

const carsAxiosService = axios.create({
    baseURL: carsURL
});

const usersAxiosService = axios.create({
    baseURL: usersURL
})

export {carsAxiosService, usersAxiosService};