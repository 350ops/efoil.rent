import { Footer } from "../sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions - AppName",
  description: "Terms and Conditions for AppName",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-950 rounded-4xl p-8">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Last updated: December 5, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                By accessing or using AppName (the "Service"), you agree to be bound by these Terms and Conditions 
                ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We reserve the right to update these Terms at any time. Your continued use of the Service after 
                any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                2. Use License
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Permission is granted to temporarily access and use the Service for personal, non-commercial use only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained in the Service</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. 
                Failure to do so constitutes a breach of the Terms.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Maintaining the confidentiality of your account and password</li>
                <li>Restricting access to your computer and account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>To introduce any viruses, trojan horses, worms, logic bombs, or other harmful material</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of AppName and its licensors. The Service is protected by copyright, trademark, and other 
                laws of both the United States and foreign countries.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our trademarks and trade dress may not be used in connection with any product or service without 
                the prior written consent of AppName.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                6. Subscriptions and Payments
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a 
                recurring basis according to your chosen billing cycle.
              </p>
              
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6 mb-3">
                Billing and Renewal
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
                <li>Your subscription will automatically renew at the end of each billing period</li>
                <li>You can cancel your subscription at any time through your account settings</li>
                <li>Cancellation will take effect at the end of the current billing period</li>
                <li>No refunds will be provided for partial subscription periods</li>
              </ul>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6 mb-3">
                Fee Changes
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We reserve the right to modify subscription fees. Any fee changes will be communicated to you 
                with reasonable advance notice and will take effect at the start of the next billing cycle.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                7. Termination
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Upon termination, your right to use the Service will immediately cease. All provisions of the Terms 
                which by their nature should survive termination shall survive, including ownership provisions, 
                warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                In no event shall AppName, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without 
                warranties of any kind, whether express or implied, including, but not limited to, implied warranties 
                of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                10. Governing Law
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
                a material change will be determined at our sole discretion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                12. Contact Us
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6">
                <p className="text-zinc-900 dark:text-white mb-2"><strong>Email:</strong> legal@appname.com</p>
                <p className="text-zinc-900 dark:text-white mb-2"><strong>Address:</strong> 123 Main Street, Suite 100, City, State 12345</p>
                <p className="text-zinc-900 dark:text-white"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

