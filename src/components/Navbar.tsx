import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  const [activeTab, setActiveTab] = useState('home');


  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 px-4 md:px-8">
        <div className="navbar bg-base-100 px-4 md:px-8">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <Link to={'/'} className="btn btn-ghost p-0 text-xl normal-case hover:bg-transparent">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 2.18L5 6.3v4.92C5 15.54 8.25 20 12 21c3.75-1 7-5.46 7-9.78V6.3l-7-3.12zM12 7a1 1 0 011 1v3h3v2h-3v3h-2v-3H8v-2h3V8a1 1 0 011-1z" />
                  </svg>
                  <span className="font-bold text-neutral">LawLink</span>
                  <span className="text-xs md:text-sm font-light text-neutral/60">| Your Legal Appointments, Simplified.</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden flex-none md:flex">
            <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium">
              <li>
                <Link to={'/'} className="text-neutral hover:bg-neutral/10 hover:text-neutral/80">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-neutral hover:bg-neutral/10 hover:text-neutral/80">
                  Services
                </button>
              </li>
              <li>
                <a className="text-neutral hover:bg-neutral/10 hover:text-neutral/80">
                  About Us
                </a>
              </li>
              <li className="relative">
                <Link to={'/search'}
                  className="flex items-center gap-2 px-4 py-2 text-neutral hover:bg-neutral/10 hover:text-neutral/80 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </Link>
              </li>

              <li>
                <Link to={'/profile'}
                  className="w-10 h-10 rounded-full bg-primary hover:bg-primary/85 flex items-center justify-center text-white transition-colors"
                >
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://static.vecteezy.com/system/resources/previews/009/734/564/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="btm-nav md:hidden z-50">
        <Link to={'/'}
          className={activeTab === 'home' ? 'active text-primary' : ''}
          onClick={() => setActiveTab('home')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>

        <Link to={'/search'}
          className={activeTab === 'search' ? 'active text-primary' : ''}
          onClick={() => setActiveTab('search')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="btm-nav-label">Search</span>
        </Link>

        <Link to={'/profile'}
          className={activeTab === 'profile' ? 'active text-primary' : ''}
          onClick={() => setActiveTab('profile')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="btm-nav-label">Profile</span>
        </Link>
      </div>
    </>
  );
}

export default Navbar;