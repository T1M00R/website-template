import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Our Plumbing Company</h1>
          <p className="text-xl max-w-2xl">Trusted plumbing professionals serving our community with integrity and excellence since 2005.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-4">Founded in 2005, Plumbing Pros began with a simple mission: to provide honest, reliable plumbing services to our community. What started as a small family business has grown into a trusted team of plumbing professionals serving residential and commercial clients throughout the region.</p>
              <p className="text-gray-700 mb-4">Our founder, with over 30 years of experience in the plumbing industry, established the company on the principles of quality workmanship, fair pricing, and exceptional customer service. These core values continue to guide our business today.</p>
              <p className="text-gray-700">As we've grown, we've maintained our commitment to treating every customer's home or business as if it were our own. We take pride in solving plumbing problems efficiently and effectively, with minimal disruption to your daily life.</p>
            </div>
            <div className="relative bg-gray-200 h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/blue.jpg" 
                alt="Plumbing Team" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We believe in honest communication, transparent pricing, and doing what's right for our customers, even when it's not the most profitable option."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every job, no matter how big or small. Our team is committed to ongoing training and using the best techniques and materials."
              },
              {
                title: "Reliability",
                description: "When you schedule a service with us, you can count on us to show up on time, prepared to solve your plumbing issues efficiently and effectively."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Smith", position: "Master Plumber & Founder" },
              { name: "Sarah Johnson", position: "Operations Manager" },
              { name: "Michael Brown", position: "Senior Plumber" },
              { name: "Emily Davis", position: "Customer Service Manager" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden">
                  <Image 
                    src="/images/green.jpg" 
                    alt={`${member.name} - ${member.position}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Certifications & Affiliations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative bg-white p-6 rounded-lg shadow-sm h-32 overflow-hidden">
                <Image 
                  src="/images/plumbing cert.png" 
                  alt="Plumbing Certification" 
                  fill
                  className="object-contain p-2" 
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-700">Our team maintains the highest industry certifications and participates in ongoing training to stay current with the latest plumbing technologies and techniques.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to experience the difference that quality plumbing service can make.</p>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 