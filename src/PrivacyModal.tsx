const EFFECTIVE_DATE = 'April 25, 2026';

export default function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-8 text-slate-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-200"
        >
          ✕
        </button>

        <h1 className="mb-1 font-display text-2xl font-semibold text-slate-100">Privacy Policy</h1>
        <p className="mb-6 text-xs text-slate-500">Effective Date: {EFFECTIVE_DATE}</p>

        <Section title="1. Who We Are">
          SheldonMind ("we", "us", or "our") operates the SheldonMind AI assistant platform. We are
          committed to protecting your personal information and your right to privacy.
          <br />
          Contact:{' '}
          <a href="mailto:support@sheldonmind.com" className="text-blue-400 hover:underline">
            support@sheldonmind.com
          </a>
        </Section>

        <Section title="2. Information We Collect">
          <strong className="text-slate-300">Account Information</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>Name, email address, and profile picture — obtained via Google OAuth.</li>
            <li>Google account ID used to authenticate your session.</li>
          </ul>
          <strong className="mt-3 block text-slate-300">Usage Data</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>Conversation history: messages you send and AI responses you receive.</li>
            <li>File attachments you upload (images, documents).</li>
            <li>Token usage per message and per session.</li>
            <li>Prompts submitted to the prompt library (public or private).</li>
            <li>Images and videos you generate, including whether you share them publicly.</li>
          </ul>
          <strong className="mt-3 block text-slate-300">Billing & Financial Data</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>Credit balance, subscription status, billing cycle, and top-up transaction history.</li>
            <li>Payment is processed by Lemon Squeezy — we do not store payment card details.</li>
          </ul>
          <strong className="mt-3 block text-slate-300">Integration Credentials</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>If you connect third-party integrations (e.g., Gmail, Outlook via MCP), access tokens are stored in encrypted form (AES-256) in our database.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc space-y-1 pl-5">
            <li>To authenticate you and provide core Service functionality.</li>
            <li>To send your prompts to AI providers and return responses to you.</li>
            <li>To store and retrieve your conversation history.</li>
            <li>To manage your credit balance and process billing.</li>
            <li>To display public community content (gallery, prompts) you have chosen to share.</li>
            <li>To improve Service reliability, debug issues, and prevent abuse.</li>
          </ul>
        </Section>

        <Section title="4. Data Sharing">
          We share your data only in the following circumstances:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong className="text-slate-300">AI Providers</strong> — your prompts are transmitted
              to the AI provider you select (OpenAI, Anthropic, Google AI, Mistral, Groq, etc.) to
              generate responses. Each provider has its own privacy policy.
            </li>
            <li>
              <strong className="text-slate-300">Cloud Infrastructure</strong> — files you upload are
              stored on AWS S3. We use Redis for session caching and PostgreSQL for persistent data.
            </li>
            <li>
              <strong className="text-slate-300">Payment Processor</strong> — billing is handled by
              Lemon Squeezy; we share only what is necessary to complete transactions.
            </li>
            <li>
              <strong className="text-slate-300">Legal Obligations</strong> — we may disclose data if
              required by law or to protect the rights and safety of users.
            </li>
          </ul>
          We do <strong className="text-slate-300">not</strong> sell your personal data to third
          parties.
        </Section>

        <Section title="5. Data Retention">
          <ul className="list-disc space-y-1 pl-5">
            <li>Conversation history is retained until you delete it or close your account.</li>
            <li>Billing records are retained as required by applicable tax and financial regulations.</li>
            <li>If you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law.</li>
          </ul>
        </Section>

        <Section title="6. Incognito Mode">
          When Incognito Mode is enabled, your conversations are not saved to our database. Messages
          are processed in memory only and are discarded when the session ends.
        </Section>

        <Section title="7. Cookies & Local Storage">
          We use session cookies and browser local storage to maintain your authenticated session and
          user preferences. We do not use third-party advertising cookies.
        </Section>

        <Section title="8. Security">
          We implement industry-standard measures to protect your data, including AES-256 encryption
          for sensitive credentials, HTTPS for all data in transit, and access controls limiting who
          can access production data. No system is 100% secure; we cannot guarantee absolute security.
        </Section>

        <Section title="9. Your Rights">
          Depending on your jurisdiction, you may have the right to:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Export a copy of your conversation history.</li>
            <li>Withdraw consent for optional data processing.</li>
          </ul>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:support@sheldonmind.com" className="text-blue-400 hover:underline">
            support@sheldonmind.com
          </a>
          .
        </Section>

        <Section title="10. Children's Privacy">
          The Service is not directed to children under 13. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal data,
          please contact us immediately.
        </Section>

        <Section title="11. Changes to This Policy">
          We may update this Privacy Policy periodically. We will notify you of significant changes
          by posting a notice in the Service or sending an email. Continued use after changes
          constitutes acceptance of the updated policy.
        </Section>

        <Section title="12. Contact Us">
          For privacy-related questions or requests:
          <br />
          <a href="mailto:support@sheldonmind.com" className="text-blue-400 hover:underline">
            support@sheldonmind.com
          </a>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-100">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-400">{children}</div>
    </div>
  );
}
