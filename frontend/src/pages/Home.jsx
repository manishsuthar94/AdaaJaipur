import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Adaa Jaipur-Style Yourself With Adaa - AdaaJaipur</title>
        <meta
          name="description"
          content="Adaa Jaipur-Style Yourself With Adaa - AdaaJaipur"
        />
      </Helmet>
      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </>
  );
};

export default Home;
