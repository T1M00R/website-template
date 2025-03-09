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
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you provide to us, including:</p>
            <ul>
              <li>Contact information (name, address, phone number, email)</li>
              <li>Service location details</li>
              <li>Billing and payment information</li>
              <li>Service history and preferences</li>
              <li>Communications with our team</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our plumbing services</li>
              <li>Communicate with you about appointments and services</li>
              <li>Process payments and maintain accounts</li>
              <li>Send service reminders and maintenance recommendations</li>
              <li>Respond to your inquiries and support needs</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>3. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with:</p>
            <ul>
              <li>Service providers who assist in our business operations</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Government authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
            
            <h2>5. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request information about how your data is used</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookies through your browser settings.</p>
            
            <h2>7. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
            
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the revised policy on our website with the effective date.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have questions or concerns about our Privacy Policy or data practices, please contact us at:</p>
            <p>
              Email: privacy@plumbingcompany.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Plumbing Street, Anytown, ST 12345
            </p>
            
            <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 