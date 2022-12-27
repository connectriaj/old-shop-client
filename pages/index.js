import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 lg:p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* phone start */}
          <div className="mockup-phone border-info hidden lg:block">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                Welcome to Old Shop 🥰
              </div>
            </div>
          </div>
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold mt-6">
              Welcome,{' '}
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['to our shop!', 'to Old Shop']}
                  loop={500}
                  cursor
                  cursorStyle=""
                  typeSpeed={125}
                  deleteSpeed={20}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="py-6 lg:text-base text-sm lg:w-1/2">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            {/* home button */}
            <Link href="/products">
              <button className="btn">Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
