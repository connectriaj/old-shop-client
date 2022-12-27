import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Categories = ({ title }) => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get(`https://mocki.io/v1/6f12fdfc-4658-48b1-82b6-2b4dcdaad652`).then((res) => {
      setMyData(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {' '}
          Categories - {title ? title + ' - Old Shop' : 'Old Shop'}
        </title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* main section  */}
      <section>
        <h1 className="text-center text-3xl mt-20 underline mb-10">
          Product Categories {myData.length}
        </h1>

        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card w-1/2 m-auto my-4 border border-gray-500 p-6" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Categories;
