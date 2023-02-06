import React from "react"
import {informationDetails } from './informationDetails'

export default function Form() {
    return (
        <div className="mx-auto bg-regal-blue px-40  pt-20 pb-32  sm:pb-30"> 
         <div className="max-w-7xl m-auto">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div>
                <div className="px-4 sm:px-0">
                  <h2 className="text-font-green uppercase font-semibold">Ask a Question</h2>
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="name" className="hidden block text-sm font-medium text-gray-700">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              id="name"
                              autoComplete="given-name"
                              className="mt-1 block w-full p-4 rounded-md   bg-transparent border border-1 border-white   shadow-sm  focus:outline-none  focus:ring-1 focus:ring focus:ring-borderColor-green sm:text-sm"
                            />
                          </div>
    
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone-number"  className=" hidden block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="number"
                              placeholder="Phone Number"
                              name="phone-number"
                              id="phone-number"
                              autoComplete="phone-number"
                              className="mt-1 block w-full p-4 rounded-md   bg-transparent border border-1 border-white  shadow-sm  focus:outline-none  focus:ring-1 focus:ring focus:ring-borderColor-green sm:text-sm"
                            />
                          </div>
      
                          <div className="col-span-6">
                            <label htmlFor="email-address" className="hidden block text-sm font-medium text-gray-700">
                              Email address
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              placeholder="Email address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full p-4  rounded-md   bg-transparent border border-1 border-white   shadow-sm  focus:outline-none  focus:ring-1 focus:ring focus:ring-borderColor-green sm:text-sm"
                            />
                          </div>
                          <div className="col-span-6">
                            <label htmlFor="permanent-address" className="hidden block text-sm font-medium text-gray-700">
                              Permanent address
                            </label>
                            <input
                              type="text"
                              name="permanent-address"
                              placeholder="Permanent Address"
                              id="permanent-address"
                              autoComplete="permanent-address"
                              className="mt-1 block w-full p-4 rounded-md  shadow-sm   bg-transparent border border-1 border-white   focus:outline-none  focus:ring-1 focus:ring focus:ring-borderColor-green sm:text-sm"
                            />
                          </div>
                          <div className="col-span-6">                 
                          <label for="message" class="hidden  shadow-sm  focus:outline-none  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border border-1 border-white  rounded-lg rounded-md  shadow-sm  focus:outline-none  focus:ring-1 focus:ring focus:ring-borderColor-green" placeholder="Message"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 text-left sm:px-6">
                        <button
                          type="submit"
                          className="uppercase inline-flex justify-center rounded-full border border-transparent bg-font-green py-2 px-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 px-16 py-4"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                </form>
                </div>
              </div>
              <div className="mt-5 md:mt-0">
                <h2 className="text-font-green uppercase font-semibold">Information</h2>
              {informationDetails.map((info, i) => (
                <div key={i}>
                  <h3 className="text-white uppercase">{info.heading}</h3>
                  <p className="text-font-gray">{info.desc}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          </div>
        </div>
    )
  }