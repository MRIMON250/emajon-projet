import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import UseProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setproducts] = UseProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product =>{
       const rest = cart.filter(pd => pd.id !== product.id)
       setCart(rest);
       removeFromDb(product.id)
    }
   
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(Product => <ReviewItem
                    key={Product.id}
                    product={Product}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="inventory">
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;