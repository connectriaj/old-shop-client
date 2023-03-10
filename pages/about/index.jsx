import Head from 'next/head';
import React from 'react';

const About = ({ title }) => {
  return (
    <section className="container m-auto">
      <Head>
        <title>About - {title ? 'title' + ' - Old Shop' : 'Old Shop'}</title>
        <meta name="description" content="E-commerce website about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1 className="text-center text-4xl underline mt-20">
        We’re All About <span className="text-primary">Old Shop</span>
      </h1>
      <p className="lg:w-1/2 mx-auto mt-10">
        When one of 3 friends wanted to buy the latest iPhone, he tried to sell
        off his then-current Samsung phone for funding but found it difficult to
        do so. When one of 3 friends wanted to buy the latest iPhone, he tried
        to sell off his then-current Samsung phone for funding but found it
        difficult to do so. When one of 3 friends wanted to buy the latest
        iPhone, he tried to sell off his then-current Samsung phone for funding
        but found it difficult to do so. When one of 3 friends wanted to buy the
        latest iPhone, he tried to sell off his then-current Samsung phone for
        funding but found it difficult to do so. When one of 3 friends wanted to
        buy the latest iPhone, he tried to sell off his then-current Samsung
        phone for funding but found it difficult to do so.
      </p>
    </section>
  );
};

export default About;
