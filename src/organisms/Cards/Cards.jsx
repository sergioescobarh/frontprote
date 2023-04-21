import { useState } from "react";
import {Card} from '../../molecules/Card';
// const axios = require('axios/dist/node/axios.cjs'); 
// const API = 'https://fakestoreapi.com/products'

// const data =  axios(API)
        

function Cards () {

    
    // const [products,setProducts] = useState(data);
    



    return (
        <div>
        <section className="card-container">
                    <ul>
                    {/* {products.map((item) => <li><Card /></li>)} */}
                    </ul>
                    
                </section>
        </div>
    );
};
export {Cards};