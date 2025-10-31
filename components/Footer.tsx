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
            <p className="text-gray-400">
              Durable. Dependable. Your trusted partner for all outdoor maintenance needs.
            </p>
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
              <li>Email: djandthecrew@gmail.com</li>
              <li>Phone: (952) 484-2394</li>
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

