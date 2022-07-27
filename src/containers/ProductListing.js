import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setproducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('ERR', err);
            });
        dispatch(setproducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log('Products Are', products);


    return (
        <div className='ui grid container'>
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;
