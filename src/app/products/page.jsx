
import { allproducts } from '@/action/server/products';
import Productscard from '@/Components/Cards/Productscard';
import React from 'react';

const page =async() => {

    const products= await allproducts()

    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>

            {
                products.map(p=><Productscard key={p._id} product={p}></Productscard>)
            }
           
        </div>
    );
};

export default page;