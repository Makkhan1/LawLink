const Footer: React.FC = () => {
  return (
    <footer className="footer p-12 md:p-10 bg-base-100 text-base-content border-t border-neutral/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 2.18L5 6.3v4.92C5 15.54 8.25 20 12 21c3.75-1 7-5.46 7-9.78V6.3l-7-3.12zM12 7a1 1 0 011 1v3h3v2h-3v3h-2v-3H8v-2h3V8a1 1 0 011-1z" />
              </svg>
              <span className="text-xl font-bold text-neutral">LawLink</span>
            </div>
            <p className="text-sm text-neutral/60">
              Streamlining legal consultations through modern appointment management solutions for law firms and clients.
            </p>
            {/* <div className="flex gap-2">
              <button className="btn btn-sm btn-ghost text-neutral/60">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </button>
            </div> */}
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-neutral">Services</h3>
            <ul className="space-y-2">
              <li><a className="link link-hover text-sm text-neutral/60">Find a Lawyer</a></li>
              <li><a className="link link-hover text-sm text-neutral/60">Appointment History</a></li>
              <li><a className="link link-hover text-sm text-neutral/60">Specialty Search</a></li>
              <li><a className="link link-hover text-sm text-neutral/60">Firm Directory</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-neutral">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral/60">
                <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 95081 6XXXX
              </li>
              <li className="text-sm text-neutral/60">
                <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact.mahtab@lawlink.in
              </li>
              <li className="text-sm text-neutral/60">
                <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                456 Justice Marg, New Delhi, DL 110001
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-neutral">Stay Updated</h3>
            <div className="form-control">
              <div className="join">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-sm join-item bg-base-200 w-full"
                />
                <button className="btn btn-sm btn-primary join-item">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-xs text-neutral/50">
              Get updates about new features and legal resources
            </p>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-xs text-neutral/50">
              © 2025 LawLink. All rights reserved.
              <br className="md:hidden" />
              <a className="link link-hover text-xs ml-0 md:ml-2">Privacy Policy</a> •
              <a className="link link-hover text-xs"> Terms of Service</a> •
              <a className="link link-hover text-xs"> Accessibility</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;