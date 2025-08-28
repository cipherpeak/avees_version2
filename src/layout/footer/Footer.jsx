import { Link } from "react-router-dom"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useState } from "react"
import logo from "../../assets/logo/Avees logo red.png"
import whatsapp from "../../assets/logo/logo.jpg"

function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  return (
    <>
      <footer className="bg-white text-black shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={logo}
                    alt="Avees Logo"
                    className="h-11 md:h-16 w-auto rounded-full scale-150"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-black">Our company</h3>

              <p className="text-black text-sm leading-relaxed mb-6">
                Bringing the taste of Kuttanad to every kitchen.
              </p>
            </div>

            {/* Shop Section */}
            <div className="flex flex-col">
              <button 
                className="md:hidden flex justify-between items-center w-full text-left"
                onClick={() => toggleSection('shop')}
              >
                <h3 className="text-lg font-semibold text-black underline">Shop</h3>
                <span>{openSection === 'shop' ? '−' : '+'}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 text-black underline hidden md:block">Shop</h3>
              <ul className={`space-y-3 ${openSection === 'shop' ? 'block' : 'hidden md:block'}`}>
                <li>
                  <Link to="/avees-foods" className="text-black hover:text-red-600 transition-colors text-sm">
                    Avees Foods
                  </Link>
                </li>
                <li>
                  <Link to="/avees-puttu-house" className="text-black hover:text-red-600 transition-colors text-sm">
                    Avees Puttu House
                  </Link>
                </li>
                <li>
                  <Link to="/avees-instant-batters" className="text-black hover:text-red-600 transition-colors text-sm">
                    Avees Instant Batters
                  </Link>
                </li>
                <li>
                  <Link to="/avees-retail" className="text-black hover:text-red-600 transition-colors text-sm">
                    Avees Retail
                  </Link>
                </li>
                <li>
                  <Link to="/traditional-spices" className="text-black hover:text-red-600 transition-colors text-sm">
                    Traditional Spices
                  </Link>
                </li>
                <li>
                  <Link to="/ready-to-cook" className="text-black hover:text-red-600 transition-colors text-sm">
                    Ready to Cook
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div className="flex flex-col">
              <button 
                className="md:hidden flex justify-between items-center w-full text-left"
                onClick={() => toggleSection('about')}
              >
                <h3 className="text-lg font-semibold text-black underline">About</h3>
                <span>{openSection === 'about' ? '−' : '+'}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 text-black underline hidden md:block">About</h3>
              <ul className={`space-y-3 ${openSection === 'about' ? 'block' : 'hidden md:block'}`}>
                <li>
                  <Link to="/about" className="text-black hover:text-red-600 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/opportunities" className="text-black hover:text-red-600 transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/stores" className="text-black hover:text-red-600 transition-colors text-sm">
                    Stores
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black hover:text-red-600 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info Section */}
            <div className="flex flex-col">
              <button 
                className="md:hidden flex justify-between items-center w-full text-left"
                onClick={() => toggleSection('contact')}
              >
                <h3 className="text-lg font-semibold text-black underline">Contact Info</h3>
                <span>{openSection === 'contact' ? '−' : '+'}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 text-black underline hidden md:block">Contact Info</h3>
              <div className={`text-sm space-y-3 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
                <p className="font-medium">Avees Foods</p>
                <p>South Indian Specialties</p>
                <p>Email: info@aveesfoods.com</p>
                <p>Phone: +91 7907224281</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons - Moved to bottom center */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-4 items-center">
              <a
                href="https://www.youtube.com/@aveesfoods2947"
                aria-label="YouTube"
                className="text-red-600 border border-red-600 p-3 rounded-full transition-colors"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://www.instagram.com/aveesfoods/"
                aria-label="Instagram"
                className="text-red-600 border-red-600 p-3 rounded-full border transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/avees.foods"
                aria-label="Facebook"
                className="text-red-600 border-red-600 p-3 rounded-full border transition-colors"
              >
                <BiLogoFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-black text-sm">© 2025 Avees Foods. All rights reserved.</div>
              <div className="text-black text-sm">
                <Link to="/privacy" className="hover:text-red-600 mr-4">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-red-600">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <FloatingWhatsApp 
        phoneNumber="+917907224281"
        accountName="Avees Foods"
        statusMessage="Typically replies within 1 hour"
        avatar={whatsapp}
        chatMessage="Hello there! 🤝 How can we help you today?"
        placeholder="Type a message..."
        allowClickAway={true}
      />
    </>
  )
}

export default Footer