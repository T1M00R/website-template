import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-blue-900">
          {/* Placeholder for hero image */}
          <Image 
            src="/images/plumbing-hero.jpg" 
            alt="Plumbing Hero" 
            fill 
            className="object-cover" 
            style={{ objectPosition: 'center top' }} 
          />
          <div className="w-full h-full flex items-center justify-center text-white/50 text-xl font-semibold">
            Plumbing Hero Image Placeholder
          </div>
        </div>
        <div className="container mx-auto px-6 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Fast, Reliable Plumbing Services</h1>
            <p className="text-xl mb-8 text-white">Available 24/7 for all your emergency plumbing needs</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition-colors">
                Request Service
              </Link>
              <Link href="/services" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md text-center transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Plumbing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Repairs",
                description: "24/7 emergency plumbing repairs to fix leaks, clogs, and burst pipes.",
                image: "/images/pipes.jpg"
              },
              {
                title: "Bathroom Remodeling",
                description: "Complete bathroom renovation services from design to installation.",
                image: "/images/bathroom.jpg"
              },
              {
                title: "Kitchen Plumbing",
                description: "Professional kitchen plumbing services including sink and faucet installation.",
                image: "/images/kitchensink.jpg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link href="/services" className="text-blue-600 font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Plumbing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", description: "All our plumbers are fully licensed and insured." },
              { title: "24/7 Availability", description: "Emergency services available any time, day or night." },
              { title: "Fair Pricing", description: "Transparent pricing with no hidden fees or surprises." },
              { title: "Satisfaction Guaranteed", description: "We're not happy until you're completely satisfied." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl font-bold mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Downtown",
                quote: "The plumber arrived within an hour of my call and fixed my leaking pipe quickly. Great service!"
              },
              {
                name: "Michael Davis",
                location: "Westside",
                quote: "They remodeled our entire bathroom and the results exceeded our expectations. Professional and detail-oriented."
              },
              {
                name: "Jennifer Smith",
                location: "Northside",
                quote: "I've used their services multiple times and they're always reliable, clean, and reasonably priced."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber Today?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our team of experienced plumbers is ready to help with any plumbing issue you might have.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition-colors">
              Contact Us
            </Link>
            <a href="tel:+15551234567" className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
