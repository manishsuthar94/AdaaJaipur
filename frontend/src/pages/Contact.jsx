import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <>
      {/* <main>
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>
        <section id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                  <p className="mt-3 mb-12 text-lg text-gray-600">
                    Need help or have questions? We're here for you! Contact us
                    with any inquiries, feedback, or support related to our
                    products and services.
                  </p>
                  <ul className="mb-6 md:mb-0">
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                          Our Address
                        </h3>
                        <p className="text-gray-600">
                          Address: H-5, RIICO MANSAROVAR INDUSTRIAL AREA, JAIPUR
                          – 302020.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                          Contact
                        </h3>
                        <p className="text-gray-600 ">
                          Mobile: +91 98281 70003
                        </p>
                        <p className="text-gray-600 ">
                          Mail: adaajaipur4india@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                          Timings
                        </h3>
                        <p className="text-gray-600 ">
                          Monday - Saturday: 9:30 AM to 6:30 PM (IST)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 className="mb-4 text-2xl font-bold ">Drop Us A Line</h2>
                  <form id="contactForm">
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label className="pb-1 text-xs uppercase tracking-wider"></label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 sm:mb-0"
                            name="name"
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label className="pb-1 text-xs uppercase tracking-wider"></label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Your email address"
                            className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 sm:mb-0"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider"></label>
                        <textarea
                          id="textarea"
                          name="textarea"
                          placeholder="Write your message..."
                          className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 sm:mb-0"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-full bg-slate-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}

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
          <img
            className="object-cover w-full h-64 mt-24 rounded-lg lg:h-[22rem] hidden sm:block"
            src={assets.contact_banner}
            alt=""
          />
        </div>
      </section>

      <NewsletterBox />
    </>
  );
};

export default Contact;
