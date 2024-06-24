import axios from "axios";

const api = axios.create({ 
    baseURL: 'https://6632937ac51e14d69564d9af.mockapi.io/test/v1' }); 


export async function getItens() {
    try {
        const url = '/itens';
        return await api.get(url);
    } catch (error) {
        return console.log(error);
    }
};

export async function getItemById(id: string) {
    try {
        const url = '/itens/';
        return await api.get(url + id);
    } catch (error) {
        return console.log(error);
    }
};
export default api;