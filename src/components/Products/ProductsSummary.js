import React from 'react';
import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>"Quality Stationery, Delivered to Your Doorstep"</h2>
      <p>
        Select Your Favorite Stationery Items from Our Wide Range and Elevate
        Your Workspace, All Delivered to Your Home
      </p>
      <p>
        All Our Stationery Products Are Crafted with Premium Materials,
        Just-in-Time for Your Needs, and Designed by Expert Artisans!
      </p>
    </section>
  );
};

export default ProductsSummary;
