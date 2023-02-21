import React from "react";
import { getCurrentUser } from "../../services/auth.service";

const Profile: React.FC = () => {
    const currentUser = getCurrentUser();
    console.log("currentUser:", currentUser);

    return (
        <div className="container mx-auto md:pt-0 lg:pt-p ">
            <div className="w-full card bg-white rounded-md shadow-xl lg:max-w-xl">
            <header className="bg-blue-400 text-white p-4 mb-4">
                <h3 className="text-xl font-bold">
                    <strong>{currentUser.email}</strong> Profile
                </h3>
            </header>
            <p className="mb-2">
                <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)}
            </p>
            <p className="mb-2">
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p className="mb-2">
                <strong>Email:</strong> {currentUser.email}
            </p>
            <strong className="block mb-2">Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role: string, index: number) => (
                        <li key={index} className="list-disc ml-4">{role}</li>
                    ))}
            </ul>
        </div>
        </div>
    );
};

export default Profile;
