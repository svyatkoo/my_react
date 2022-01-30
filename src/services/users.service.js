import {mainAxiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => mainAxiosService.get(urls.users).then(value => value.data),
    getById: (id) => mainAxiosService.get(`${urls.users}/${id}`).then(value => value.data)
}