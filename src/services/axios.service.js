import axios from "axios";

import {carsURL, usersURL} from "../configs/urls";

const carsAxiosService = axios.create({
    baseURL: carsURL
});

const mainAxiosService = axios.create({
    baseURL: usersURL
})

export {carsAxiosService, mainAxiosService};