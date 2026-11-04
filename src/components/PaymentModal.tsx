import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { PlanType } from '../types';
import { X, ShieldCheck, CheckCircle2, Loader2, CreditCard, Landmark, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanType;
  amount: number;
  planName: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  plan,
  amount,
  planName
}) => {
  const { user, upgradePlan } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<'card' | 'transfer' | 'ussd'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.email) setEmail(user.email);
      if (user.name) setName(user.name);
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Realistic Paystack processing delay simulation
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      upgradePlan(plan);
    }, 1200);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-lg font-bold">Paystack Checkout</h3>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Secured 256-bit encrypted checkout
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Payment Successful!</h3>
            <p className="text-sm text-slate-600">
              Your subscription to <strong className="text-slate-900">{planName}</strong> (₦{amount.toLocaleString()}) has been activated.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Transaction Ref:</span>
                <span className="font-mono font-bold text-slate-800">
                  PAY_{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Account Email:</span>
                <span className="font-semibold text-slate-800">{email}</span>
              </div>
              <div className="flex justify-between">
                <span>Access Status:</span>
                <span className="font-bold text-emerald-600">Active (Unlimited)</span>
              </div>
            </div>
            <button
              onClick={handleFinish}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md cursor-pointer transition-colors"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Plan Summary Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">Selected Plan</span>
                <h4 className="text-base font-bold text-slate-900">{planName}</h4>
              </div>
              <div className="text-right">
                <div className="text-xl font-extrabold text-slate-900">₦{amount.toLocaleString()}</div>
                <span className="text-[11px] text-slate-500">per month</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMethod('card')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  method === 'card'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>Card</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod('transfer')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  method === 'transfer'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Landmark className="w-4 h-4 text-emerald-600" />
                <span>Transfer</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod('ussd')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  method === 'ussd'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>USSD</span>
              </button>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing with Paystack...</span>
                  </>
                ) : (
                  <span>Pay ₦{amount.toLocaleString()}</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>PCI-DSS Level 1 Certified • Nigerian Bank Cards Accepted</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
