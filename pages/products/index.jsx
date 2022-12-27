import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import AllProducts from './all-products';

const Products = ({ title, product }) => {
  const { data: productData = [] } = useQuery({
    queryKey: ['productData'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <>
      <Head>
        <title> Products - {title ? title + ' - Old Shop' : 'Old Shop'}</title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* main section  */}
      <div className="lg:w-2/3 lg:m-auto mt-6 lg:mt-20 px-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productData.map((product) => (
          <AllProducts key={product.id} product={product}></AllProducts>
        ))}
      </div>
    </>
  );
};

export default Products;
