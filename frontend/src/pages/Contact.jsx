import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - AdaaJaipur</title>
        <meta name="description" content="Contact Us - AdaaJaipur" />
      </Helmet>

      <section class="bg-white mb-16">
        <div class="container px-6 py-12 mx-auto">
          <div class="text-center ">
            <p class="font-medium text-blue-500">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Just Reached to Us
            </h1>

            <p class="mt-3 text-gray-500 ">Chat to our friendly team.</p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div class="p-4 rounded-lg bg-blue-50 md:p-6">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">
                Chat to sales
              </h2>
              <p class="mt-2 text-sm text-gray-500 ">
                Speak to our friendly team.
              </p>
              <p class="mt-2 text-sm text-blue-500">
                adaajaipur4india@gmail.com
              </p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">
                Address:
              </h2>

              <p class="mt-2 text-sm text-blue-500">
                H-5, RIICO MANSAROVAR INDUSTRIAL AREA, JAIPUR – 302020.
              </p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">
                Customer Care
              </h2>
              <p class="mt-2 text-sm text-gray-500 ">
                Mon-Sat from 9:30am to 6:30pm.
              </p>
              <p class="mt-2 text-sm text-blue-500">+91 98281 70003</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56948.26314582237!2d75.73714806266777!3d26.863274478938504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d69821715b%3A0x90205ef69828a6d5!2sAdaa%20Jaipur!5e0!3m2!1sen!2sin!4v1737868582507!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full h-64 mt-24 rounded-lg lg:h-[22rem] "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <NewsletterBox />
    </>
  );
};

export default Contact;
