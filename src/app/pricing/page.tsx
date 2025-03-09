import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Pricing Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Pricing</h1>
          <p className="text-xl max-w-2xl">Transparent pricing with no hidden fees. Get the best value for your plumbing needs.</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Service Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Service */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900">Basic Service</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-blue-600">$89</span>
                  <span className="text-gray-600 ml-2">starting at</span>
                </div>
                <p className="mt-2 text-gray-600">For simple plumbing issues</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Drain unclogging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Faucet repair</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Toilet repair</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Basic inspection</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Standard Service */}
            <div className="border rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl">
                POPULAR
              </div>
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900">Standard Service</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-blue-600">$149</span>
                  <span className="text-gray-600 ml-2">starting at</span>
                </div>
                <p className="mt-2 text-gray-600">For moderate plumbing issues</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">All Basic services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Water heater maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Pipe leak repair</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Comprehensive inspection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">90-day service warranty</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Premium Service */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900">Premium Service</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-blue-600">$299</span>
                  <span className="text-gray-600 ml-2">starting at</span>
                </div>
                <p className="mt-2 text-gray-600">For complex plumbing issues</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">All Standard services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Sewer line service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Water line replacement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Video pipe inspection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">1-year service warranty</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Hourly Service Rates</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-700 font-bold">Service Type</th>
                    <th className="px-6 py-4 text-right text-gray-700 font-bold">Standard Hours</th>
                    <th className="px-6 py-4 text-right text-gray-700 font-bold">After Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Basic Plumbing Service</td>
                    <td className="px-6 py-4 text-right text-gray-700">$89/hr</td>
                    <td className="px-6 py-4 text-right text-gray-700">$129/hr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Drain Cleaning</td>
                    <td className="px-6 py-4 text-right text-gray-700">$99/hr</td>
                    <td className="px-6 py-4 text-right text-gray-700">$149/hr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Water Heater Service</td>
                    <td className="px-6 py-4 text-right text-gray-700">$109/hr</td>
                    <td className="px-6 py-4 text-right text-gray-700">$159/hr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Sewer Line Service</td>
                    <td className="px-6 py-4 text-right text-gray-700">$129/hr</td>
                    <td className="px-6 py-4 text-right text-gray-700">$179/hr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Master Plumber</td>
                    <td className="px-6 py-4 text-right text-gray-700">$139/hr</td>
                    <td className="px-6 py-4 text-right text-gray-700">$189/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mt-4 text-sm text-center">
              * Standard hours: Monday-Friday, 8am-6pm. After hours: Evenings, weekends, and holidays.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you charge for estimates?</h3>
              <p className="text-gray-700">For most standard services, we provide free estimates. For more complex jobs requiring extensive diagnostics, a service fee may apply which will be credited toward the cost of work if you choose to proceed.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">We accept all major credit cards, cash, checks, and offer financing options for larger projects. Payment is typically due upon completion of service.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer any guarantees on your work?</h3>
              <p className="text-gray-700">Yes, we stand behind our work with service warranties ranging from 90 days to 1 year depending on the service package. Parts and fixtures are covered by manufacturer warranties.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How quickly can you respond to an emergency?</h3>
              <p className="text-gray-700">For plumbing emergencies, we typically respond within 1-2 hours. Our 24/7 emergency service ensures that help is always available when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free quote or to schedule a service appointment.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition-colors">
              Get a Quote
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