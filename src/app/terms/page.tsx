export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-2xl">Please read these terms carefully before using our services.</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using our plumbing services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2>2. Service Description</h2>
            <p>We provide residential and commercial plumbing services including but not limited to repairs, installations, maintenance, and emergency services. The specific details of services will be agreed upon before work commences.</p>
            
            <h2>3. Scheduling and Appointments</h2>
            <p>We will make every effort to arrive at the scheduled appointment time. However, due to the nature of plumbing emergencies, there may occasionally be delays. We will communicate any changes to the schedule as promptly as possible.</p>
            
            <h2>4. Estimates and Pricing</h2>
            <p>We provide estimates based on our assessment of the work required. The final price may vary if additional issues are discovered during the service or if the scope of work changes. We will communicate any potential changes in price before proceeding with additional work.</p>
            
            <h2>5. Payment Terms</h2>
            <p>Payment is due upon completion of services unless otherwise agreed upon in writing. We accept major credit cards, cash, and checks. For larger projects, we may require a deposit before work begins.</p>
            
            <h2>6. Warranties and Guarantees</h2>
            <p>We provide warranties on our workmanship as specified in your service agreement. Manufacturer warranties apply to parts and fixtures installed. Warranty coverage may be void if systems are tampered with or altered after our service.</p>
            
            <h2>7. Customer Responsibilities</h2>
            <p>Customers are responsible for providing accurate information about plumbing issues, ensuring reasonable access to work areas, and securing any permits required by local regulations unless we have explicitly agreed to obtain them.</p>
            
            <h2>8. Cancellation Policy</h2>
            <p>We request at least 24 hours' notice for cancellation of scheduled appointments. Late cancellations or no-shows may incur a service fee.</p>
            
            <h2>9. Liability Limitations</h2>
            <p>Our liability is limited to the cost of the services provided. We are not responsible for damages resulting from pre-existing conditions, unavoidable property damage necessary to complete repairs, or issues arising from customer-supplied materials.</p>
            
            <h2>10. Dispute Resolution</h2>
            <p>Any disputes arising from our services shall first be addressed through good-faith negotiation. If resolution cannot be reached, disputes will be resolved through arbitration in accordance with local laws.</p>
            
            <h2>11. Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.</p>
            
            <h2>12. Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us at info@plumbingcompany.com or call (555) 123-4567.</p>
            
            <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 