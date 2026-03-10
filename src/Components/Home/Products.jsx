import React from 'react';
import products from '../Data/toys.json';
import Productscard from '../Cards/Productscard';

const Products = () => {
    console.log(products)

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-10'>Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">

                {
                    products.map(p => (
                        <Productscard
                            key={p.title}
                            product={p}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default Products;