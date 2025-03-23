import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gray-800/20 to-transparent rounded-full blur-3xl animate-gradient-x"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-800/20 to-transparent rounded-full blur-3xl animate-gradient-x"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Dragonsof" className="h-10 animate-float" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Dragonsof</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
            <button className="text-white hover:text-gray-300">
              <i className="fas fa-search text-2xl"></i>
            </button>
            <button className="text-white hover:text-gray-300">
              <i className="fas fa-user text-2xl"></i>
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Contact Buttons */}
      <div className="fixed left-6 bottom-6 flex flex-col gap-4 z-50">
        <a 
          href="https://wa.me/your-number" 
          className="bg-green-500 p-4 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/50"
          title="Contact on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a 
          href="tel:your-number" 
          className="bg-red-500 p-4 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/50"
          title="Call us"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}

export default Layout