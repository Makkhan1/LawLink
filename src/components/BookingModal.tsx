import { useAppDispatch, useAppSelector } from '../app/hooks';
import { bookAppointment, showToast } from '../app/store';
import { Lawyer, Appointment } from '../types';

interface Props {
  lawyer: Lawyer;
}

const BookingModal = ({ lawyer }: Props) => {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.appointments);

  const handleBooking = (slot: string) => {
    const newAppointment: Appointment = {
      lawyerId: lawyer.id,
      time: slot,
      lawyerName: lawyer.name,
      cost: lawyer.costPerAppointment,
    };
    
    dispatch(bookAppointment(newAppointment));
    
    dispatch(showToast({
      message: `Booked with ${lawyer.name} at ${new Date(slot).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`,
      type: 'success'
    }));
    
    const modal = document.getElementById(`modal-${lawyer.id}`);
    if (modal) (modal as HTMLDialogElement).close();
  };

  const bookedSlots = appointments
    .filter((app) => app.lawyerId === lawyer.id)
    .map((app) => app.time);

  const availableSlots = lawyer.availability.filter(
    (slot) => !bookedSlots.includes(slot)
  );

  return (
    <dialog id={`modal-${lawyer.id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Book with {lawyer.name}</h3>
        <div className="py-4">
          {availableSlots.length === 0 ? (
            <div className="text-red-500">No available slots</div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  className="btn btn-outline"
                  onClick={() => handleBooking(slot)}
                >
                  {new Date(slot).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BookingModal;