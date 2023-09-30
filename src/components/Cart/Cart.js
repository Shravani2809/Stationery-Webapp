import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'p5',
          name: 'Elegant Brass Paperweight',
          description:
            'Polished brass paperweight for a touch of sophistication',
          price: 9.99
        }
      ].map(item =>
        <li>
          {item.name}
        </li>
      )}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.78</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
