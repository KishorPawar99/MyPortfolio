import React from 'react'
import Footer from './Footer'

const ContactMe = () => {
  return (
    <section id="contact" className="sm:h-fit flex flex-col items-center justify-center mb-6 mt-14 sm:mt-2 scroll-mt-20">
      <h1 className="text-center mb-8 sm:mb-8 text-3xl sm:text-5xl text-white font-bold tracking-wide" data-aos="zoom-in" data-aos-duration="2000">
        Contact Me
      </h1>
      <div className="p-10 shadow-md shadow-orange-500 bg-gray-800 border-2 border-orange-500 rounded-xl">

      <form className="space-y-2 sm:space-y-4 m-2" data-aos="zoom-in" data-aos-duration="2000">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-md text-white font-semibold">First Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border text-white tracking-wide border-orange-500 rounded focus:outline-none focus:border-orange-500 "
                />
              </div>

              <div>
                <label className="text-ms text-white font-semibold">Last Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border text-white tracking-wide border-orange-500 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-md text-white font-semibold">
                Email <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full mt-1 px-3 py-2 border text-white tracking-wide border-orange-500 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-md text-white font-semibold">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 px-3 py-2 border text-white tracking-wide border-orange-500 rounded resize-none focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white px-8 py-2 mb-4 rounded hover:bg-orange-700 transition"
            >
              Send
            </button>
            <Footer/>
          </form>

      </div>
    </section>
  )
}

export default ContactMe
