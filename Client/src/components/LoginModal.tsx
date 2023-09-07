import { Link } from "react-router-dom";

const LoginModal = () => {
    return (
      <>
        <h3 className="mb-4 text-xl font-medium text-center items-center text-gray-900 dark:text-white">
          <button
            className="px-4 py-2 border justify-center items-center flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 m-auto"
            style={{ width: "100%" }}
          >
            <img
              className="w-5 h-5"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
        </h3>
        <form className="space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-bold text-blue-900 hover:underline "
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
            New To IT LAND? Register {"("}
            <Link
              to="/SignUp"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Student
            </Link>
            /
            <Link
              to="/SignUp"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Company{")"}
            </Link>
          </div>
        </form>
      </>
    );
  };

  export default LoginModal