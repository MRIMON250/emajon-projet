import React from 'react';
import UseProducts from '../../hooks/UseProducts';

const Orders = () => {
    const [products, setproducts] = UseProducts()
   
    return (
        <div>
            <h2>This is Orders :{products.length}</h2>
        </div>
    );
};

export default Orders;