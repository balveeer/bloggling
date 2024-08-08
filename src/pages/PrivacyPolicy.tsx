import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-white my-10 p-6 rounded-lg shadow-md">
  <h1 className="text-2xl font-semibold mb-4">Privacy Policy for Bloggling</h1>

  {/* Introduction */}
  <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
  <p className="mb-4">
    Welcome to Bloggling ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our blogging website and Progressive Web Application (PWA).
  </p>

  {/* Information We Collect */}
  <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
  <p className="mb-4">
    We collect information that you provide directly to us when using Bloggling:
  </p>
  {/* ... Other sections ... */}
  {/* You can format the rest of the sections similarly */}
  
  {/* Sharing of Your Information */}
  <h2 className="text-xl font-semibold mb-2">4. Sharing of Your Information</h2>
  <p className="mb-4">
    We do not sell your personal information. We may share your information in the following situations:
  </p>
  {/* ... Other sections ... */}

  {/* Data Security */}
  <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
  <p className="mb-4">
    We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
  </p>

  {/* Your Rights */}
  <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
  <p className="mb-4">
    Depending on your location, you may have certain rights regarding your personal information, including:
  </p>
  {/* ... Other sections ... */}

  {/* Children's Privacy */}
  <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
  <p className="mb-4">
    Bloggling is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
  </p>

  {/* Changes to This Privacy Policy */}
  <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
  <p className="mb-4">
    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
  </p>

  {/* Contact Us */}
  <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
  <p className="mb-4">
    If you have any questions about this Privacy Policy, please contact us at:
    <a
      href="mailto:bs902423@gmail.com"
      className="text-blue-400 hover:underline"
    >
      bs902423@gmail.com
    </a>
  </p>
  <p className="text-sm text-gray-400 mt-2">
    Last updated: {new Date().toLocaleDateString()}
  </p>
</div>

  )
}

export default PrivacyPolicy