export interface Lawyer {
  id: number;
  name: string;
  image: string;
  specialty: string[];
  location: string;
  costPerAppointment: number;
  availability: string[];
}

export interface Appointment {
  lawyerId: number;
  time: string;
  lawyerName: string;
  cost: number;
}

export interface ToastState {
  message: string | null;
  type: 'success' | 'error' | null;
}