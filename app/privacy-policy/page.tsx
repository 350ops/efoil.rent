import { Footer } from "../sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – efoil.rent | Manta Fleet Limited",
  description: "Privacy Policy for efoil.rent, operated by Manta Fleet Limited.",
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Last updated: December 5, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Welcome to efoil.rent, a trading name of Manta Fleet Limited ("we," "our," or "us"), a private limited company registered in England and Wales (Company No. 17041670), with registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the application.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
                <li>Create an account</li>
                <li>Use our services</li>
                <li>Contact our customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Name and email address</li>
                <li>Phone number</li>
                <li>Profile information</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, please note that no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected information from a child under 13, 
                please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                10. Contact Us
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6">
                <p className="text-zinc-900 dark:text-white mb-2"><strong>Email:</strong> hello@efoil.rent</p>
                <p className="text-zinc-900 dark:text-white mb-2"><strong>Company:</strong> Manta Fleet Limited (Company No. 17041670)</p>
                <p className="text-zinc-900 dark:text-white"><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

