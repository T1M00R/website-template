export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl">How we collect, use, and protect your personal information.</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-black">
            <h2 className="text-black">1. Information We Collect</h2>
            <p className="text-black">We collect personal information that you provide to us, including:</p>
            <ul className="text-black">
              <li>Contact information (name, address, phone number, email)</li>
              <li>Service location details</li>
              <li>Billing and payment information</li>
              <li>Service history and preferences</li>
              <li>Communications with our team</li>
            </ul>
            
            <h2 className="text-black">2. How We Use Your Information</h2>
            <p className="text-black">We use the information we collect to:</p>
            <ul className="text-black">
              <li>Provide and improve our plumbing services</li>
              <li>Communicate with you about appointments and services</li>
              <li>Process payments and maintain accounts</li>
              <li>Send service reminders and maintenance recommendations</li>
              <li>Respond to your inquiries and support needs</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-black">3. Information Sharing</h2>
            <p className="text-black">We do not sell or rent your personal information to third parties. We may share information with:</p>
            <ul className="text-black">
              <li>Service providers who assist in our business operations</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Government authorities when required by law</li>
            </ul>
            
            <h2 className="text-black">4. Data Security</h2>
            <p className="text-black">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
            
            <h2 className="text-black">5. Your Rights</h2>
            <p className="text-black">You have the right to:</p>
            <ul className="text-black">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            
            <h2 className="text-black">6. Cookies and Tracking</h2>
            <p className="text-black">Our website may use cookies and similar technologies to enhance your experience and collect information about how you use our site. You can manage your cookie preferences through your browser settings.</p>
            
            <h2 className="text-black">7. Children's Privacy</h2>
            <p className="text-black">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
            
            <h2 className="text-black">8. Changes to This Policy</h2>
            <p className="text-black">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the revised policy on our website with the effective date.</p>
            
            <h2 className="text-black">9. Contact Us</h2>
            <p className="text-black">If you have questions or concerns about our Privacy Policy or data practices, please contact us at:</p>
            <p className="text-black">
              Email: privacy@plumbingcompany.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Plumbing Street, Anytown, ST 12345
            </p>
            
            <p className="text-sm text-black mt-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 