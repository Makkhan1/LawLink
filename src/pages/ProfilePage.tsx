import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Appointment } from '../types';
import { cancelAppointment, showToast } from '../app/store';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.appointments);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const handleCancel = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    (document.getElementById('cancel-modal') as HTMLDialogElement)?.showModal();
  };
  const confirmCancel = () => {
    if (selectedAppointment) {
      dispatch(cancelAppointment(selectedAppointment));
      dispatch(showToast({
        message: `Appointment with ${selectedAppointment.lawyerName} canceled`,
        type: 'error'
      }));
      setSelectedAppointment(null);
      (document.getElementById('cancel-modal') as HTMLDialogElement)?.close();
    }
  };
  const user = {
    name: "Mahtab Ahmad",
    email: "mahtab.ahmad@gmail.com",
    phone: "+91 95081 6XXXX",
    location: "Jamshedpur, Jharkhand, India",
    avatar: "https://avatars.githubusercontent.com/u/101255447?v=4"
  };

  return (
    <section className="min-h-screen py-12 px-4 md:px-8 bg-gray-50">
      <dialog id="cancel-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Cancellation</h3>
          <div className="py-4">
            {selectedAppointment && (
              <>
                <p className="mb-4">
                  Are you sure you want to cancel your appointment with{' '}
                  <span className="font-semibold">{selectedAppointment.lawyerName}</span>?
                </p>
                <p className="text-gray-600">
                  Scheduled for{' '}
                  {new Date(selectedAppointment.time).toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}
                </p>
              </>
            )}
          </div>
          <div className="modal-action">
            <button
              className="btn btn-error"
              onClick={confirmCancel}
            >
              Confirm Cancel
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => (document.getElementById('cancel-modal') as HTMLDialogElement)?.close()}
            >
              Keep Appointment
            </button>
          </div>
        </div>
      </dialog>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
              <div className="space-y-1 text-gray-600">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {user.email}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {user.phone}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {user.location}
                </p>
              </div>
            </div>
            <button className="ml-auto btn btn-outline px-6 py-2">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Appointments</h2>

          {appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No appointments booked yet
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={`${appointment.lawyerId}-${appointment.time}`}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-2 md:mb-0">
                      <h3 className="font-semibold text-gray-800">{appointment.lawyerName}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(appointment.time).toLocaleDateString('en-IN', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                        {' '}at{' '}
                        {new Date(appointment.time).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-primary">
                        ₹{appointment.cost}
                      </span>
                      <button className="btn btn-error btn-sm text-white"
                        onClick={() => handleCancel(appointment)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;