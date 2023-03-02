import {useState} from "react";
import Profile from "../Profile";
import PasswordSettings from "../PasswordSettings";
import AutoportSettings from "../AutoportSettings";

const tabs = [
    {name: "Profile", content: <Profile/>},
    {name: "Password", content: <PasswordSettings/>},
    {name: "Autoport Settings", content: <AutoportSettings/>},
    {name: "Notifications", content: "Notifications"},
    {name: "More", content: "More ..."},
];
export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);
    return (

        <div className="container p-6 flex flex-col md:flex-row">
            <div className="flex flex-col md:w-4/12	">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-sm font-medium uppercase ${
                            index === activeTab
                                ? "text-blue-600 bg-blue-100"
                                : "text-gray-600 hover:text-gray-800"
                        }`}
                        onClick={() => setActiveTab(index)}
                    >                        {tab.name}
                    </button>))}
            </div>
            <div className="flex-1 px-4 py-2">
                <div className="prose">{tabs[activeTab].content}</div>
            </div>
        </div>);
}