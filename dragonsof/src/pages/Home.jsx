import { useState } from 'react'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Dragonsof<br />Provides<br />Best IT Solutions
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl">
            We Can Make Your Dreams True With Well Designed And Digitalized Processings That You Never Hope To Do.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Contact Now <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="#services" className="border-2 border-white/50 text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:border-white backdrop-blur-sm">
              Find The Service <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Flexible Solutions</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">Discover our comprehensive range of IT solutions designed to transform your business</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EMS System */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <i className="fas fa-users-gear text-6xl text-red-500 group-hover:text-red-400 transition-colors duration-300"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Employee Management System</h3>
                <p className="text-gray-400 mb-4">Salary, Attendance and Other Management Solutions</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="text-gray-400">(10 Ratings)</span>
                </div>
              </div>
            </div>

            {/* POS System */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <i className="fas fa-cash-register text-6xl text-red-500 group-hover:text-red-400 transition-colors duration-300"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Point of Sale System</h3>
                <p className="text-gray-400 mb-4">Customer Orders, Inventory Management and Other</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="text-gray-400">(16 Ratings)</span>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <i className="fas fa-code text-6xl text-red-500 group-hover:text-red-400 transition-colors duration-300"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-400 mb-4">Custom Websites, Web Applications and E-commerce Solutions</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="text-gray-400">(24 Ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-sm hover:from-gray-800 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">14+</h3>
              <p className="text-gray-400 text-sm tracking-wider">PROJECTS COMPLETED</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-sm hover:from-gray-800 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">29+</h3>
              <p className="text-gray-400 text-sm tracking-wider">HAPPY CLIENTS</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-sm hover:from-gray-800 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1+</h3>
              <p className="text-gray-400 text-sm tracking-wider">USEFUL SYSTEMS</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-sm hover:from-gray-800 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</h3>
              <p className="text-gray-400 text-sm tracking-wider">SUPPORT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home