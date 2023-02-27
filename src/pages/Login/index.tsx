import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../services/auth.service";

type Props = {};

const Login: React.FC<Props> = () => {
  let navigate: NavigateFunction = useNavigate();

  // const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setMessage("");
    // setLoading(true);

    login(email, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-800  uppercase">
          Sign in
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor={"email"}
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-800  bg-white border rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-800  bg-white border rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm font-medium mt-1"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-2"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="mt-8 text-xs font-light text-center text-red-600">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-800  hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
