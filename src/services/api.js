
import axios from 'axios';
import { API_URL } from '../API/link';

export const getRecipes = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
       
    }
}

export const getRecipe = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        
    }
}