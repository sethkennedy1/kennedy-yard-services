import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const services = [
    { name: 'Lawn Care', description: 'Full suite of professional lawn care services' },
    { name: 'Lawn Mowing', description: 'Regular mowing and edging services' },
    { name: 'Landscaping Projects', description: 'Custom landscape design and installation' },
    { name: 'Fertilizer', description: 'Professional fertilization programs' },
    { name: 'Weed Control', description: 'Comprehensive weed prevention and removal' },
    { name: 'Snow Removal', description: 'Reliable winter snow clearing services' },
    { name: 'Salt Spreading', description: 'Ice management and salt application' },
    { name: 'Consulting Services', description: 'Expert outdoor maintenance advice' },
    { name: 'Weeding', description: 'Garden bed maintenance and weeding' },
  ]

  const testimonials = [
    {
      text: "Kennedy Yard Services transformed our lawn! Professional, reliable, and affordable.",
      author: "Sarah M.",
    },
    {
      text: "They've maintained our property for years. Always punctual and thorough.",
      author: "John D.",
    },
    {
      text: "Best landscaping company in the area. Highly recommend their services!",
      author: "Lisa K.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-jd-green to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/lawn2.jpg')",
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Kennedy Yard Services
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              Durable. Dependable. Kennedy Yard Services.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-jd-yellow text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Family Owned & Operated
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We are a family owned business that offers professional quality yard services with affordable pricing. 
            We appreciate the opportunity to work for you!
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Kennedy Yard Services brings years of dedication and expertise to every property we care for. 
            Built on a foundation of reliability and community trust, we're committed to delivering 
            exceptional outdoor maintenance services that keep your landscape healthy, beautiful, and thriving 
            year-round.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive outdoor care solutions for every season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-jd-green"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-jd-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-green-100">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 p-8 rounded-lg shadow-lg"
              >
                <div className="text-jd-yellow text-4xl mb-4">"</div>
                <p className="text-lg mb-6 italic">{testimonial.text}</p>
                <p className="font-bold text-jd-green">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and discover why homeowners 
            trust Kennedy Yard Services for all their outdoor maintenance needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-jd-yellow text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

