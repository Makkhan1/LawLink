import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState, setLawyers } from '../app/store';
import BookingModal from './BookingModal';
import { Lawyer } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  lawyersData: Lawyer[];
}

const Lawyers = ({ lawyersData }: Props) => {
  const dispatch = useAppDispatch();
  const lawyers = useAppSelector((state: RootState) => state.lawyers);
  
  const initialDisplayCount = 3;
  const displayedLawyers = lawyers.slice(0, initialDisplayCount);

  useEffect(() => {
    dispatch(setLawyers(lawyersData));
  }, [dispatch, lawyersData]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Meet Our Legal Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedLawyers.map((lawyer: Lawyer) => (
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to={'/search'} 
            className="btn btn-primary px-8 py-3 text-lg hover:bg-primary/90 transition-colors"
          >
            View All
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Lawyers;