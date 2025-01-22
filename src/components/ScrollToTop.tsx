import { useEffect, useState, useRef } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 300 && currentScrollY > lastScrollY.current) {
      setIsVisible(true);
    } 
    else if (currentScrollY < lastScrollY.current) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-20 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-circle btn-primary shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;