import { url, orderUrl } from "../constants";

export const getData = () => {
    return fetch(url)
        .then(response => response.json());
};

export const getOrder = (ingredients) => {
    return fetch(orderUrl, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(ingredients)
    })
        .then(response => response.json());
};
