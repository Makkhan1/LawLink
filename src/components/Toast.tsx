import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearToast } from '../app/store';

const Toast = () => {
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector((state) => state.toast);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert alert-${type} flex items-start shadow-lg`}>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            <div>
              <h3 className="font-semibold">
                {type === 'success' ? 'Success!' : 'Action Completed'}
              </h3>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;