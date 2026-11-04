import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, PlanType } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => { success: boolean; error?: string };
  register: (name: string, email: string, password?: string) => { success: boolean; error?: string };
  logout: () => void;
  upgradePlan: (plan: PlanType) => void;
  toggleSaveCountry: (countryId: string) => void;
  toggleChecklist: (key: string) => void;
  isCountrySaved: (countryId: string) => boolean;
}

const STORAGE_KEY = 'japa_update_user_v1';
const USERS_DB_KEY = 'japa_update_registered_users_v1';

const DEFAULT_DEMO_USER: User = {
  id: 'usr_demo_1',
  name: 'Chidi Okonkwo',
  email: 'chidi@example.com',
  plan: 'free',
  savedCountries: ['canada', 'uk'],
  checklistProgress: {
    'passport': true,
    'ielts': false,
    'wes': true,
    'pof': false
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return null;
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  }, [user]);

  const login = (email: string, _password?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    // Check custom registered users
    let registeredUsers: Array<{ name: string; email: string; password?: string; plan?: PlanType }> = [];
    try {
      const existing = localStorage.getItem(USERS_DB_KEY);
      if (existing) registeredUsers = JSON.parse(existing);
    } catch {
      registeredUsers = [];
    }

    const matched = registeredUsers.find(u => u.email.toLowerCase() === cleanEmail);
    if (matched) {
      const loggedInUser: User = {
        id: 'usr_' + Date.now(),
        name: matched.name,
        email: matched.email,
        plan: matched.plan || 'free',
        savedCountries: ['canada', 'uk'],
        checklistProgress: { 'passport': true }
      };
      setUser(loggedInUser);
      return { success: true };
    }

    // Check demo user
    if (cleanEmail === DEFAULT_DEMO_USER.email) {
      setUser(DEFAULT_DEMO_USER);
      return { success: true };
    }

    // Generic auto-sign in for test convenience if email looks valid
    const guestUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: cleanEmail.split('@')[0].replace(/[^a-zA-Z]/g, ' ').trim() || 'Traveler',
      email: cleanEmail,
      plan: 'free',
      savedCountries: ['canada', 'uk'],
      checklistProgress: { 'passport': true }
    };
    setUser(guestUser);
    return { success: true };
  };

  const register = (name: string, email: string, password?: string) => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Please enter your full name.' };
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const newUser: User = {
      id: 'usr_' + Date.now(),
      name: cleanName,
      email: cleanEmail,
      plan: 'free',
      savedCountries: ['canada', 'uk', 'germany'],
      checklistProgress: { 'passport': false, 'ielts': false, 'wes': false, 'pof': false }
    };

    try {
      const existing = localStorage.getItem(USERS_DB_KEY);
      const list = existing ? JSON.parse(existing) : [];
      list.push({ name: cleanName, email: cleanEmail, password, plan: 'free' });
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }

    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const upgradePlan = (plan: PlanType) => {
    if (!user) {
      // Automatically create a user if subscribing directly from home
      const newSubscriber: User = {
        id: 'usr_' + Date.now(),
        name: 'Subscriber',
        email: 'subscriber@japaupdate.com',
        plan,
        subscribedAt: new Date().toLocaleDateString('en-GB'),
        savedCountries: ['canada', 'uk', 'germany', 'australia'],
        checklistProgress: { 'passport': true, 'ielts': true }
      };
      setUser(newSubscriber);
      return;
    }

    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        plan,
        subscribedAt: new Date().toLocaleDateString('en-GB')
      };
    });
  };

  const toggleSaveCountry = (countryId: string) => {
    setUser(prev => {
      if (!prev) return null;
      const exists = prev.savedCountries.includes(countryId);
      const updated = exists
        ? prev.savedCountries.filter(id => id !== countryId)
        : [...prev.savedCountries, countryId];
      return { ...prev, savedCountries: updated };
    });
  };

  const toggleChecklist = (key: string) => {
    setUser(prev => {
      if (!prev) return null;
      const current = !!prev.checklistProgress[key];
      return {
        ...prev,
        checklistProgress: {
          ...prev.checklistProgress,
          [key]: !current
        }
      };
    });
  };

  const isCountrySaved = (countryId: string) => {
    return user ? user.savedCountries.includes(countryId) : false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        upgradePlan,
        toggleSaveCountry,
        toggleChecklist,
        isCountrySaved
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
