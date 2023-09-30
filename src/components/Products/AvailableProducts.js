import React from 'react';
import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Luxury Fountain Pen',
    description: 'Elegant writing instrument with gold trim',
    price: 49.99
  },
  {
    id: 'p2',
    name: 'Premium Leather Notebook',
    description: 'Handcrafted journal with high-quality leather cover',
    price: 34.95
  },
  {
    id: 'p3',
    name: 'Designer Pencils Set',
    description: 'Set of 12 artist-grade pencils in a decorative tin',
    price: 14.99
  },
  {
    id: 'p4',
    name: 'Executive Desk Organizer',
    description: 'Wooden organizer with compartments for office supplies',
    price: 29.99
  }
];

const AvailableProducts = () => {
  return (
    <section className={classes.products}>
      <Card>
        <ul>
          {DUMMY_PRODUCTS.map(item => {
            return (
              <ProductItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
