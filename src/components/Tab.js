import { Component, useState } from "react";

import Interst from "./Interst";
import Profile from "./Profile";
import Setting from "./Setting";
export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "dikesh",
    age: "23",
    email: "dikeshchouhan02@gmail.com",
    interst: ["coding", "music"],
    theme: "dark",
  });
  const [error, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      Component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interst",
      Component: Interst,
      validate: () => {
        const err = {};

        if (!data.interst || data.interst.length < 1) {
          err.interst = "Select at least one interest";
        }

        setErrors(err);

        // return true if no errors
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Setting",
      Component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponets = tabs[activeTab].Component;
  const handlePrecClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((Prev) => Prev - 1);
    }
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((Prev) => Prev + 1);
    }
  };
  const handleSubmitClick = () => {
    console.log(data);
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="heading"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponets data={data} setData={setData} error={error} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrecClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab == tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
