import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CountUpSection from "../CountUpSection/CountUpSection";
import Service from "../Services/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <CountUpSection></CountUpSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
