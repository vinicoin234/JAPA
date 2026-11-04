import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const showToast = useCallback(({ type, title, message, duration = 5000 }: Omit<ToastItem, 'id'>) => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const newToast: ToastItem = { id, type, title, message, duration };

    setToasts(prev => [newToast, ...prev].slice(0, 5)); // Keep max 5 toasts

    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }
  }, [dismissToast]);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}

      {/* Floating Toasts Container */}
      <div
        aria-live="polite"
        className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 max-w-sm sm:max-w-md w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map(toast => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto rounded-2xl p-4 shadow-2xl border backdrop-blur-md transition-all transform animate-in slide-in-from-top-3 duration-300 ${
                isSuccess
                  ? 'bg-slate-900/95 text-white border-emerald-500/50 shadow-emerald-950/40'
                  : isError
                  ? 'bg-red-950/95 text-white border-red-500/50 shadow-red-950/40'
                  : 'bg-slate-900/95 text-white border-blue-500/50 shadow-slate-950/40'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSuccess
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : isError
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {isSuccess && <CheckCircle2 className="w-5 h-5" />}
                  {isError && <AlertCircle className="w-5 h-5" />}
                  {!isSuccess && !isError && <Info className="w-5 h-5" />}
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5 space-y-0.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {toast.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {toast.message}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => dismissToast(toast.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Dismiss notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Countdown Bar */}
              {toast.duration && toast.duration > 0 && (
                <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isSuccess ? 'bg-emerald-400' : isError ? 'bg-red-400' : 'bg-blue-400'
                    }`}
                    style={{
                      animation: `shrinkWidth ${toast.duration}ms linear forwards`
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
