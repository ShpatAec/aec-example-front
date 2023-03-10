import React  from "react";
import HomePageCards from "../HomePageCards";
import Table from "../Table";
import MainTab from "../MainTab";
// @ts-ignore
const HomeTabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
      <>
        <div className="container dark:bg-gray-800 flex flex-wrap">
          <div className="w-full">
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
            >
              <button
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  onClick={() => {
                    setOpenTab(1);
                  }}
                  role="tablist"
              >
                <div
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                            ? "bg-blue-700 text-white dark:bg-blue-800"
                            : "text-blue-800 bg-white dark:text-white dark:bg-gray-800"
                        )
                    }
                >

                  Main
                </div>
              </button>
              <button
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  onClick={() => {
                    setOpenTab(2);
                  }}
                  role="tablist"
              >
                <div
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                            ? "bg-blue-700 text-white dark:bg-blue-800"
                            : "text-blue-800 bg-white dark:text-white dark:bg-gray-800")
                    }
                >
                  Sales
                </div>
              </button>
              <button
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  onClick={() => {
                    setOpenTab(3);
                  }}
                  role="tablist"
              >
                <div
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                            ? "bg-blue-700 text-white dark:bg-blue-800"
                            : "text-blue-800 bg-white dark:text-white dark:bg-gray-800")
                    }
                >
                  Accounting
                </div>
              </button>
              <button
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  onClick={() => {
                    setOpenTab(4);
                  }}
                  role="tablist"
              >
                <div
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 4
                            ? "bg-blue-700 text-white dark:bg-blue-800"
                            : "text-blue-800 bg-white dark:text-white dark:bg-gray-800")
                    }
                >
                  After sales
                </div>
              </button>
              <button
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  onClick={() => {
                    setOpenTab(5);
                  }}
                  role="tablist"
              >
                <div
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 5
                            ? "bg-blue-700 text-white dark:bg-blue-800"
                            : "text-blue-800 bg-white dark:text-white dark:bg-gray-800")
                    }
                >
                  Agency
                </div>
              </button>
            </ul>
            <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto dark:bg-gray-800">
                <div className=" tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <MainTab/>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <HomePageCards />
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <Table />
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service for
                      state of the art customer service.
                    </p>
                  </div>
                  <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    <p>
                      Professionally cultivate one-to-one customer service with
                      robust ideas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default function TabsRender() {
  return (
      <>
        <HomeTabs />
      </>
  );
}