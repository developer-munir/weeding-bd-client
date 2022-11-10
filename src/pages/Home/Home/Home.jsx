import React from "react";
import BlogUpdate from "../../BlogUpdate/BlogUpdate";
import Follow from "../Follow/Follow";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
          <Services></Services>
          <BlogUpdate></BlogUpdate>
      <Follow></Follow>
    </div>
  );
};

export default Home;
