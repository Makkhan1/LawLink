const Services: React.FC = ()=>{
    return (
        <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-8 text-center">
                <div className="text-5xl text-blue-600 mb-6">⚖️</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Legal Consultation
                </h3>
                <p className="text-gray-600">
                  Connect with specialized lawyers in various legal domains for expert advice.
                </p>
              </div>
            </div>
      
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-8 text-center">
                <div className="text-5xl text-blue-600 mb-6">⏱️</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  24/7 Availability
                </h3>
                <p className="text-gray-600">
                  Book appointments anytime with real-time availability tracking.
                </p>
              </div>
            </div>
      
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-8 text-center">
                <div className="text-5xl text-blue-600 mb-6">📄</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Case Management
                </h3>
                <p className="text-gray-600">
                  Track and manage all your legal appointments and case details in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services;