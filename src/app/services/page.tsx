import Link from "next/link";

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
      ]
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
      ]
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
      ]
    },
    {
      id: "water-heater-services",
      title: "Water Heater Services",
      description: "Keep your hot water flowing with our comprehensive water heater services. We install, repair, and maintain all types of water heaters to ensure efficient and reliable performance.",
      features: [
        "Tank and tankless water heater installation",
        "Water heater repair and maintenance",
        "Energy-efficient upgrades",
        "Water heater flushing and cleaning",
        "Leak detection and repair"
      ]
    },
    {
      id: "leak-detection",
      title: "Leak Detection",
      description: "Our advanced leak detection services locate hidden leaks without unnecessary damage to your property. We use specialized equipment to pinpoint the exact location of leaks quickly and accurately.",
      features: [
        "Non-invasive detection methods",
        "Thermal imaging technology",
        "Acoustic leak detection",
        "Moisture meters and sensors",
        "Prompt repair solutions"
      ]
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
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Services Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Plumbing Services</h1>
          <p className="text-xl max-w-2xl">Comprehensive plumbing solutions for residential and commercial properties. Our licensed professionals are ready to tackle any plumbing challenge.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 p-6 flex items-center border-b border-gray-200">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">What We Offer:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Request This Service
                  </Link>
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