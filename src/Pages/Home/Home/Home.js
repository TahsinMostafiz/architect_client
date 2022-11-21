import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CountUpSection from "../CountUpSection/CountUpSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <CountUpSection></CountUpSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
