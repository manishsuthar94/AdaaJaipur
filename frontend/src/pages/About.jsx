import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AdaaJaipur</title>
        <meta name="description" content="About Us - AdaaJaipur" />
      </Helmet>
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
              <div className="bg-white w-full h-auto py-8 flex  gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/Adaajaipur.official?_rdr"
                  target="_blank"
                  className="bg-blue-50 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-indigo-200"
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 92 92"
                    fill="none"
                  >
                    <rect
                      x="0.138672"
                      width=""
                      height=""
                      rx="15"
                      fill="#EDF4FF"
                    />
                    <path
                      d="M56.4927 48.6403L57.7973 40.3588H49.7611V34.9759C49.7611 32.7114 50.883 30.4987 54.4706 30.4987H58.1756V23.4465C56.018 23.1028 53.8378 22.9168 51.6527 22.8901C45.0385 22.8901 40.7204 26.8626 40.7204 34.0442V40.3588H33.3887V48.6403H40.7204V68.671H49.7611V48.6403H56.4927Z"
                      fill="#337FFF"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/adaajaipur.official/"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 51 51"
                    fill="none"
                  >
                    <path
                      d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                      fill="url(#paint0_radial_7092_54379)"
                    />
                    <path
                      d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                      fill="url(#paint1_radial_7092_54379)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_7092_54379"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)"
                      >
                        <stop offset="0.09" stop-color="#FA8F21" />
                        <stop offset="0.78" stop-color="#D82D7E" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_7092_54379"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)"
                      >
                        <stop
                          offset="0.64"
                          stop-color="#8C3AAA"
                          stop-opacity="0"
                        />
                        <stop offset="1" stop-color="#8C3AAA" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@adaajaipur"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
                >
                  <svg
                    className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 92 93"
                    fill="none"
                  >
                    <rect
                      x="0.138672"
                      y="1"
                      width="91.5618"
                      height="91.5618"
                      rx="15"
                      fill="#FFECE8"
                    />
                    <path
                      d="M71.2471 33.8708C70.6493 31.6234 68.8809 29.8504 66.6309 29.2428C62.5626 28.1523 46.2396 28.1523 46.2396 28.1523C46.2396 28.1523 29.925 28.1523 25.8484 29.2428C23.6067 29.8421 21.8383 31.615 21.2322 33.8708C20.1445 37.9495 20.1445 46.4647 20.1445 46.4647C20.1445 46.4647 20.1445 54.98 21.2322 59.0586C21.83 61.306 23.5984 63.079 25.8484 63.6866C29.925 64.7771 46.2396 64.7771 46.2396 64.7771C46.2396 64.7771 62.5626 64.7771 66.6309 63.6866C68.8726 63.0873 70.641 61.3144 71.2471 59.0586C72.3348 54.98 72.3348 46.4647 72.3348 46.4647C72.3348 46.4647 72.3348 37.9495 71.2471 33.8708Z"
                      fill="#FF3000"
                    />
                    <path
                      d="M41.0256 54.314L54.5838 46.4647L41.0256 38.6154V54.314Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href="https://in.pinterest.com/adaajaipur/"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
                >
                  <svg
                    className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 93 92"
                    fill="none"
                  >
                    <rect
                      x="1.13867"
                      width="91.5618"
                      height="91.5618"
                      rx="15"
                      fill="#FFECEC"
                    />
                    <path
                      d="M44.3501 23.0437C36.9186 23.893 29.5132 30.0479 29.2075 38.84C29.0154 44.2083 30.5044 48.2356 35.4951 49.3664C37.6608 45.4553 34.7965 44.5927 34.3511 41.7633C32.5216 30.1686 47.4153 22.2615 55.2093 30.3563C60.6018 35.9615 57.0519 53.206 48.3541 51.4136C40.0231 49.7017 52.4323 35.9749 45.7823 33.2796C40.3767 31.0894 37.5037 39.9798 40.0667 44.396C38.5647 51.9902 35.3292 59.1464 36.6391 68.6715C40.8876 65.5158 42.3198 59.4727 43.4943 53.1702C45.6295 54.4978 46.7691 55.8789 49.4937 56.0935C59.5407 56.8891 65.1515 45.8263 63.7805 35.6218C62.5623 26.5749 53.7422 21.971 44.3501 23.0437Z"
                      fill="#FF0000"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src={assets.Founders1}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src={assets.Founders2}
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
