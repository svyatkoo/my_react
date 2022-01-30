import {mainAxiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => mainAxiosService.get(urls.posts).then(value => value.data)
}