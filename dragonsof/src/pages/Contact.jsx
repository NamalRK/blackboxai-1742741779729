function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center pt-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            <a href="/" className="hover:text-red-500 transition-colors">Home</a>
            <span>/</span>
            <span className="text-red-500">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-400">Have questions about our services? We're here to help! Reach out to us through any of the following channels.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-400">123 Business Street, Colombo, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-400">+94 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-400">info@dragonsof.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-500 transition-colors">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-500 transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-500 transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-500 transition-colors">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989329!2d79.7861641176038!3d6.921833528820761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1709656149435!5m2!1sen!2sus"
              className="w-full h-[400px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact