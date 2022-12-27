import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllProducts = ({ product }) => {
  const { title, img, description, price } = product;

  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">New</div> */}
          </h2>
          <p> {description.slice(0, 26)}...</p>
          <div className="card-actions justify-around mt-4">
            <Link href="">
              <button className="badge badge-outline">Add to cart</button>
            </Link>
            <Link href="/">
              <button className="badge badge-outline">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
