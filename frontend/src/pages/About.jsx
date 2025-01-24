import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <>
      <main>
        <div className="text-2xl text-center pt-8 border-t">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                About Adaa Jaipur
              </h2>
              <p className="mb-4">
                <strong className="font-bold">ADAA JAIPUR </strong> was started
                by Keshav Shukla in 2010 and is now managed by his elder son
                Tulsi Prasad Shukla. It is much reckoned for its in-house
                exclusive Feminine brand{" "}
                <strong className="font-bold">“ADAA”</strong>. <br />
                <br /> Adaa has almost all types of collections that an Indian
                Woman needs, be it Kurties, Plazzos, Gowns, Sharara, and many
                more. Our mission is to provide the best quality product at its
                best price. And we love to read your feedback as it encourages
                us to be more productive to our lovable customers.
              </p>
              <p>
                <strong className="font-bold text-center">
                  "STYLE YOURSELF WITH ADAA!"
                </strong>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://adaajaipur.com/cdn/shop/files/Founders1.png?v=1706981151&width=3200"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://adaajaipur.com/cdn/shop/files/Founders2.png?v=1706981151&width=3200"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
      </main>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </>
  );
};

export default About;
