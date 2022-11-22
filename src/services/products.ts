import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getJeweleryProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/category/jewelery`);
        return response;
    } catch (err) {
        console.log('Error fetching jewelery products', err);
    }
};

export const getMenClothingProducts = async () => {
    try { 
        const response = await axios.get(`${API_URL}/products/category/men's clothing`);
        return response;
    } catch (err) {
        console.error('Error fetching men clothing products', err);
    }
};

export const getWomenClothingProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/category/women's clothing`);
        return response;
    } catch (err) {
        console.error('Error fetching women clothing products', err);
    }
};

export const getElectronicsProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/category/electronics`);
        return response;
    } catch (err) {
        console.error('Error fetching electronics products', err);
    }
};

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response;
    } catch (err) {
        console.error('Error fetching all products', err);
    }
};