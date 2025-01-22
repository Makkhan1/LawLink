import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lawyer, Appointment, ToastState } from '../types';

interface AppState {
  lawyers: Lawyer[];
  appointments: Appointment[];
  toast: ToastState;
}

const initialState: AppState = {
  lawyers: [],
  appointments: [],
  toast: {
    message: null,
    type: null,
  },
};

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState: initialState.lawyers,
  reducers: {
    setLawyers: (_state, action: PayloadAction<Lawyer[]>) => action.payload
  }
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: initialState.appointments,
  reducers: {
    bookAppointment: (state, action: PayloadAction<Appointment>) => {
      state.push(action.payload);
    },
    cancelAppointment: (state, action: PayloadAction<Appointment>) => {
      return state.filter(app => 
        !(app.lawyerId === action.payload.lawyerId && 
          app.time === action.payload.time)
      );
    }
  }
});

const toastSlice = createSlice({
  name: 'toast',
  initialState: initialState.toast,
  reducers: {
    showToast: (state, action: PayloadAction<{ 
      message: string; 
      type: 'success' | 'error' 
    }>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearToast: (state) => {
      state.message = null;
      state.type = null;
    }
  }
});

export const { setLawyers } = lawyersSlice.actions;
export const { bookAppointment, cancelAppointment } = appointmentsSlice.actions;
export const { showToast, clearToast } = toastSlice.actions;

export const store = configureStore({
  reducer: {
    lawyers: lawyersSlice.reducer,
    appointments: appointmentsSlice.reducer,
    toast: toastSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
