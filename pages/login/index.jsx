import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBeer,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
} from 'react-icons/fa';

const Login = ({ title }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
  };

  return (
    <>
      <Head>
        <title>Login - {title ? title + ' - Old Shop' : 'Old Shop'}</title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="hero bg-base-200 lg:p-32 py-10 lg:mb-6">
        <div className="hero-content flex-col">
          {/* text section */}
          <div className="text-center lg:text-left">
            <h1 className="lg:text-3xl text-xl font-bold">Login now!</h1>
          </div>

          {/* form section */}
          <form
            onSubmit={handleLogin}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn">
                  Login
                </button>
                <p className="mt-2">
                  <small>
                    New to Old Shop?{' '}
                    <Link className="underline" href="/register">
                      Register
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </form>
          {/* form end */}

          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          {/* others login system */}
          <div>
            <span className="mx-2 text-lg">
              <button>
                <FaGoogle />
              </button>
            </span>
            <span className="mx-2 text-lg">
              <button>
                <FaGithub />
              </button>
            </span>
            <span className="mx-2 text-lg">
              <button>
                <FaFacebook />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
