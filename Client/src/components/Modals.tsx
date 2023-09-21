import { useState } from "react";
import { Form } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useTranslation } from "react-i18next";

const SignUpModal = () => {
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
      <Form className="space-y-6" method="post">
        <input name="type" hidden value="signUp"/>
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
          <div className="w-full pr-1">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-full pl-1">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              By Signing up, you agree to our{" "}
              <a className="text-blue-800">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
        <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
          Already Register? LOGIN
        </div>
      </Form>
    </>
  );
};




const ShowModal = ({ handleClose }: any) => {
  
  const [showing, setShowing] = useState(<LoginModal />);
  const [selectedModal, setSelected] = useState("Login");
  const { t } = useTranslation();

  const Selected = (str: string) => {
    if (str == "Login") {
      setShowing(<LoginModal />);
      setSelected("Login");
    } else {
      setShowing(<SignUpModal />);
      setSelected("Register");
    }
  };

  return (
    <>
      <div className="relative w-full max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="px-6 py-6 lg:px-8">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
              aria-label="Global"
            >
              {selectedModal === "Login" ? (
                <>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Login")}
                      href="#"
                      className=" text-lg font-bold leading-6 text-blue-900 underline decoration-blue-900"
                    >
                      {t("Đăng Nhập")}
                    </a>
                  </div>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Register")}
                      href="#"
                      className=" text-lg font-bold leading-6"
                    >
                      {t("Đăng Ký")}
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Login")}
                      href="#"
                      className=" text-lg font-bold leading-6"
                    >
                      {t("Đăng Nhập")}
                    </a>
                  </div>

                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Register")}
                      href="#"
                      className=" text-lg font-bold leading-6 text-blue-900 underline decoration-blue-900"
                    >
                      {t("Đăng Ký")}
                    </a>
                  </div>
                </>
              )}
            </nav>

            {showing}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
export { SignUpModal };
