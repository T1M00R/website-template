import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "emergency-repairs",
      title: "Emergency Repairs",
      description: "Our 24/7 emergency plumbing service ensures that help is always available when you need it most. We respond quickly to burst pipes, major leaks, sewer backups, and other urgent plumbing issues.",
      features: [
        "Available 24 hours a day, 7 days a week",
        "Fast response times",
        "Experienced emergency plumbers",
        "Fully equipped service vehicles",
        "Upfront pricing with no overtime charges"
      ],
      image: "/images/pipes.jpg"
    },
    {
      id: "bathroom-remodeling",
      title: "Bathroom Remodeling",
      description: "Transform your bathroom with our comprehensive remodeling services. From simple updates to complete renovations, our team handles every aspect of your bathroom project with precision and care.",
      features: [
        "Custom bathroom design services",
        "Quality fixture installation",
        "Tile and flooring installation",
        "Shower and tub replacement",
        "Vanity and cabinet installation"
      ],
      image: "/images/bathroom.jpg"
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Our professional drain cleaning services eliminate clogs and prevent future blockages. We use advanced techniques and equipment to ensure your drains flow freely and efficiently.",
      features: [
        "High-pressure water jetting",
        "Video drain inspection",
        "Drain snaking and augering",
        "Preventative maintenance",
        "Safe, non-damaging techniques"
      ],
      image: "/images/pipes.jpg"
    },
    {
      id: "water-heater-services",
      title: "Water Heater Services",
      description: "Keep your water hot and your energy bills low with our comprehensive water heater services. We repair, maintain, and install all types of water heaters.",
      features: [
        "Tank and tankless water heater installation",
        "Water heater repair and maintenance",
        "Energy-efficient upgrades",
        "Water heater flushing",
        "Prompt repair solutions"
      ],
      image: "/images/kitchensink.jpg"
    },
    {
      id: "sewer-line-services",
      title: "Sewer Line Services",
      description: "Our comprehensive sewer line services address all your underground plumbing needs. From inspections to repairs and replacements, we keep your sewer system functioning properly.",
      features: [
        "Video camera inspections",
        "Trenchless sewer repair",
        "Sewer line cleaning",
        "Root removal",
        "Sewer line replacement"
      ],
      image: "/images/bathroom.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Services Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Plumbing Services</h1>
          <p className="text-xl max-w-2xl">Professional plumbing solutions for all your residential and commercial needs.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-auto relative">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-100 p-6 border-b border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <h3 className="font-semibold text-lg mb-3 text-gray-800">Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Contact Us", description: "Call us or fill out our online form to schedule a service appointment." },
              { title: "Diagnosis", description: "Our plumber will inspect the issue and provide a detailed diagnosis." },
              { title: "Transparent Quote", description: "You'll receive a clear, upfront quote before any work begins." },
              { title: "Quality Service", description: "We complete the job efficiently and clean up when we're done." }
            ].map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Plumbing Problems?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to schedule a service appointment or to get a free quote.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition-colors">
              Schedule Service
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