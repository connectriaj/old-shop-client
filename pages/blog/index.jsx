import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Blog = ({title}) => {
  return (
    <>
      <Head>
        <title>Blog - {title ? title + ' - Old Shop' : 'Old Shop'}</title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="container lg:w-1/2 px-4 lg:p-10 m-auto my-20 grid gap-5 ">
        <div
          tabIndex={0}
          className="collapse collapse-plus lg:collapse-open  border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title lg:text-xl lg:font-medium">
            <h2>
              What are the different ways to manage a state in a React
              application?
            </h2>
            <div className="divider"></div>
          </div>
          <div className="collapse-content">
            <p>
              {' '}
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. For example, local state would be needed to show or
              hide a modal component or to track values for a form component,
              such as form submission, when the form is disabled and the values
              of a form’s inputs.
            </p>
          </div>
        </div>

        {/* 2nd blog */}
        <div className="collapse collapse-plus border border-base-300 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title lg:text-xl lg:font-medium">
            <h2> How does prototypical inheritance work?</h2>
          </div>
          <div className="collapse-content">
            <p>
              {' '}
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>

        {/* 3rd blog */}
        <div className="collapse collapse-plus border border-base-300 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title lg:text-xl lg:font-medium">
            <h2> What is a unit test? Why should we write unit tests?</h2>
          </div>
          <div className="collapse-content">
            <p>
              {' '}
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>

        {/* 4th blog */}
        <div className="collapse collapse-plus border border-base-300 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title lg:text-xl lg:font-medium">
            <h2> React vs. Angular vs. Vue?</h2>
          </div>
          <div className="collapse-content">
            <p>
              {' '}
              Angular has a steep learning curve, considering it is a complete
              solution, and mastering Angular requires you to learn associated
              concepts like TypeScript and MVC. React offers a Getting Started
              guide that should help one set up React in about an hour. Vue
              provides higher customizability and hence is easier to learn than
              Angular or React.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
