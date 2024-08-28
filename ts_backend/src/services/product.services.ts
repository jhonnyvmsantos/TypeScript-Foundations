import { Request, Response } from "express";
import data from '../database/db.json';

const products = data.products;

interface Product {
    id: number;
    name: string;
    price: number;
}

const getAllProducts = () : Product[] => {
    return products;
}

const getProductById = (id: number) : Product | undefined => {
    return products.find(item => item.id === id);
}

export default {
    getAllProducts,
    getProductById
};