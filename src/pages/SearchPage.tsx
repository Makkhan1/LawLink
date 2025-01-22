import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import BookingModal from '../components/BookingModal';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const lawyers = useAppSelector((state) => state.lawyers);

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesName = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = lawyer.specialty.some(spec => 
      spec.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesName || matchesSpecialty;
  });

  return (
    <section className="min-h-screen py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search lawyers by name or specialty..."
              className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLawyers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No lawyers found matching your search criteria.
            </div>
          ) : (
            filteredLawyers.map((lawyer) => (
              <div 
              key={lawyer.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="relative h-48 w-full">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">{lawyer.name}</h3>
                  <div className="text-sm text-gray-200">{lawyer.location}</div>
                </div>
              </figure>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {lawyer.specialty.map((spec: string) => (
                      <span 
                        key={spec} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Consultation Fee</p>
                    <p className="text-xl font-bold text-gray-900">
                      ₹{lawyer.costPerAppointment}
                    </p>
                  </div>
                  <button 
                    className="btn btn-primary px-6 py-2 rounded-lg transition-transform hover:scale-105"
                    onClick={() => {
                      const modal = document.getElementById(`modal-${lawyer.id}`);
                      if (modal) (modal as HTMLDialogElement).showModal();
                    }}
                  >
                    Book Now
                  </button>
                </div>
                
                <BookingModal lawyer={lawyer} />
              </div>
            </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;