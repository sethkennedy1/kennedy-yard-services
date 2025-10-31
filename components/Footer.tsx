export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-jd-yellow">
              Kennedy Yard Services
            </h3>
            <p className="text-gray-400 mb-4">
              Durable. Dependable. Your trusted partner for all outdoor maintenance needs.
            </p>
            <a 
              href="https://www.facebook.com/KennedyYardServices" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-jd-yellow transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-jd-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-jd-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:djandthecrew@gmail.com" className="hover:text-jd-yellow transition-colors">
                  Email: djandthecrew@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9524842394" className="hover:text-jd-yellow transition-colors">
                  Phone: (952) 484-2394
                </a>
              </li>
              <li>Serving the Greater Metro Area</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Kennedy Yard Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

