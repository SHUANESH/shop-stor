import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch ,useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProduct} from '../../Redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error)=>{
            console.log("ERROR!" , error);
        });
        dispatch(setProduct(response.data));  
    };
    useEffect(() => {
      fetchProduct();
    }, [])
    console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
