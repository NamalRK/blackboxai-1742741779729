function Services() {
  const services = [
    {
      tag: "WEB",
      title: "WEB DEVELOPMENT",
      description: "Looking for bespoke web design services in Colombo, Sri Lanka, as well as Australia, Qatar, and the USA? Our company specializes in crafting tailored web solutions for one-page sites, corporate platforms, classified directories, and e-commerce ventures, complete with seamless payment gateway integration.",
      icon: "code",
      image: "https://placehold.co/600x400/1a1a1a/cccccc?text=Web+Development"
    },
    {
      tag: "APP",
      title: "APP DEVELOPMENT",
      description: "Dragonsof specializes in providing top-tier technical expertise for Android & iOS app development, web-based applications, and ensures their seamless operation on app stores. With our commitment to API integration and user-friendly, fully responsive designs, Dragonsof is your ideal partner for unmatched app development solutions.",
      icon: "mobile-screen",
      image: "https://placehold.co/600x400/1a1a1a/cccccc?text=App+Development"
    },
    {
      tag: "DESKTOP",
      title: "DESKTOP APPLICATION",
      description: "Transform your desktop experience with Dragonsof's advanced desktop application development services. Harnessing the capabilities of Java and MySQL, we seamlessly integrate APIs to ensure efficient data management. Our solutions are designed to be incredibly useful across all systems, empowering you with versatile and dependable performance.",
      icon: "desktop",
      image: "https://placehold.co/600x400/1a1a1a/cccccc?text=Desktop+Development"
    },
    {
      tag: "UI/UX",
      title: "UI/UX DESIGNING",
      description: "Experience the perfect blend of aesthetics and functionality with our UI/UX design services. We create intuitive, user-centric interfaces that enhance user engagement and satisfaction. Our designs are not just visually appealing but also optimized for maximum usability and conversion.",
      icon: "palette",
      image: "https://placehold.co/600x400/1a1a1a/cccccc?text=UI/UX+Design"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center pt-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">SERVICE</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            <a href="/" className="hover:text-red-500 transition-colors">Home</a>
            <span>/</span>
            <span className="text-red-500">Service</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.tag} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="inline-block px-4 py-2 bg-gray-800 text-sm font-semibold rounded-full mb-6">{service.tag}</span>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="flex items-center gap-4">
                      <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                      <button className="text-white hover:text-red-500 transition-colors">
                        <i className="fas fa-heart text-2xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services