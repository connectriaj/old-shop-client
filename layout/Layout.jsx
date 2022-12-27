import React from 'react';
import Head from 'next/head';
import Navbar from '../components/header/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title ? title + ' - Old Shop' : 'Old Shop'}</title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
