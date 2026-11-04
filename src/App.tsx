import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PaymentModal } from './components/PaymentModal';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { PlanType } from './types';

type ViewType = 'home' | 'dashboard' | 'login' | 'register';

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [paymentModalState, setPaymentModalState] = useState<{
    isOpen: boolean;
    plan: PlanType;
    amount: number;
    planName: string;
  }>({
    isOpen: false,
    plan: 'premium',
    amount: 2500,
    planName: 'Premium Access'
  });

  // Handle URL hash and back-button behavior
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#dashboard') setCurrentView('dashboard');
      else if (hash === '#login') setCurrentView('login');
      else if (hash === '#register') setCurrentView('register');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenPayment = (plan: PlanType = 'premium', amount?: number, planName?: string) => {
    const defaultAmount = plan === 'basic' ? 1000 : 2500;
    const defaultPlanName = plan === 'basic' ? 'Basic Access' : 'Premium Access';
    setPaymentModalState({
      isOpen: true,
      plan,
      amount: amount ?? defaultAmount,
      planName: planName ?? defaultPlanName
    });
  };

  const handleClosePayment = () => {
    setPaymentModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenPayment={(plan) => handleOpenPayment(plan)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onOpenPricing={handleOpenPayment}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardPage
            onOpenPricing={handleOpenPayment}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'login' && (
          <LoginPage onNavigate={setCurrentView} />
        )}

        {currentView === 'register' && (
          <RegisterPage onNavigate={setCurrentView} />
        )}
      </main>

      {/* Global Footer (shown on home & dashboard views) */}
      {(currentView === 'home' || currentView === 'dashboard') && (
        <Footer onNavigate={(view, hash) => {
          setCurrentView(view);
          if (hash) {
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }} />
      )}

      {/* Paystack-Style Payment Modal */}
      <PaymentModal
        isOpen={paymentModalState.isOpen}
        onClose={handleClosePayment}
        plan={paymentModalState.plan}
        amount={paymentModalState.amount}
        planName={paymentModalState.planName}
      />
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </ToastProvider>
  );
}
