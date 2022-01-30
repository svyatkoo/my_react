import {mainAxiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getAll: () => mainAxiosService.get(urls.comments).then(value => value.data)
}