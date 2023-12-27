import React, { useState } from "react";
import { useAuth } from "./Auth/auth";
import Header from "./Header";
import Stat from "./Stat";
import Infocard from "./Infocard";
import Hplan from "./Hplan";
import OnlineBenefit from "./OnlineBenefit";
import WhatHI from "./WhatHI";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Accordion from "./Accordian";
import Login from "./Auth/Login";
import Register from "./Auth/RegisterForm";

const Plans = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchToRegister = () => {
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };

  if (!user) {
    // Show login or register components based on showLogin state
    return (
      <div>
        {showLogin ? (
          <Login onSwitchToRegister={handleSwitchToRegister} />
        ) : (
          <Register onSwitchToLogin={handleSwitchToLogin} />
        )}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Stat />
      <Infocard />
      <Hplan />
      <OnlineBenefit />
      <Info1 />
      <WhatHI />
      <Info2 />
      <Accordion />
    </div>
  );
};

export default Plans;
