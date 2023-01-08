import { url } from "../constants";

export const getData = () => {
    return fetch(url)
        .then(response => response.json());
};
