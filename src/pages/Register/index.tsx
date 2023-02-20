import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import IUser from "../../types/user.types";
import { register } from "../../services/auth.service";

const Register: React.FC = () => {
    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: IUser = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            )
            .required("This field is required!"),
    });

    const handleRegister = (formValue: IUser) => {
        const { username, email, password } = formValue;

        register(username, email, password).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-800  uppercase">
                    Sign up
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    <Form className="mt-6">
                        {!successful && (
                            <><div className="mb-2">
                                <label
                                    htmlFor={"username"}
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Username
                                </label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-blue-800  bg-white border rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-red-500 text-sm mt-1" />
                            </div><div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1" />
                            </div><div className="mb-4">
                                <label htmlFor="password"
                                       className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1" />
                            </div><div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                    Create an Account
                                </button>
                            </div></>
                        )}

                        {message && (
                            <div className="form-group">
                                <div
                                    className={
                                        successful ? "text-green-500" : "text-red-500"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Register;