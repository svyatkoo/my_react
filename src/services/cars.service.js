import {carsAxiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const carsService = {
    getAll: () => carsAxiosService.get(urls.cars).then(value => value.data),
    create: (car) => carsAxiosService.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => carsAxiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => carsAxiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}