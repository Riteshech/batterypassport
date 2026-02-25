import React, { useState } from 'react';
import { X, Lock, LogIn, User } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import BatteryRegistry from './components/BatteryRegistry';

// Simple Login Modal Component
const LoginModal = ({ isOpen, onClose, onLogin, onSkip }: { isOpen: boolean; onClose: () => void; onLogin: () => void; onSkip: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy credential check
    if (username === 'admin' && password === 'admin') {
      onLogin();
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid credentials. Try admin/admin');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Secure Login</h2>
          <p className="text-slate-500 mt-2 text-sm">Access the Battery Aadhaar Registry</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all font-medium"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all font-medium"
              placeholder="Enter password"
            />
          </div>
          
          {error && <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg">{error}</div>}

          <button 
            type="submit" 
            className="w-full bg-[#004D40] hover:bg-[#00382e] text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 mt-2"
          >
            <LogIn size={18} /> Authenticate
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500 mb-3">Just browsing?</p>
            <button 
                onClick={onSkip}
                className="text-slate-600 hover:text-green-700 font-semibold text-sm flex items-center justify-center gap-1 mx-auto hover:underline"
            >
                Continue as Guest <User size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [view, setView] = useState<'landing' | 'registry' | 'dashboard'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Flow: View Passport -> Login Modal -> Registry
  const handleViewPassportClick = () => {
    // If already authenticated, just go to registry
    if (isAuthenticated) {
      setView('registry');
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsDemoMode(false);
    setShowLogin(false);
    setView('registry');
  };

  const handleSkipLogin = () => {
    setIsAuthenticated(false);
    setIsDemoMode(false);
    setShowLogin(false);
    setView('registry');
  };

  // Flow: Sample Passport -> Dashboard (Full Access, Demo Mode)
  const handleSamplePassportClick = () => {
    setIsDemoMode(true);
    setView('dashboard');
  };

  // Handle selecting a battery from the registry
  const handleSelectBattery = (bpan: string) => {
    setView('dashboard');
  };

  const handleBack = () => {
    if (view === 'dashboard') {
      if (isDemoMode) {
        setView('landing');
      } else {
        setView('registry');
      }
    } else {
      setView('landing');
    }
  };

  // Logic to open login modal from dashboard if user is a guest
  const handleLoginRequest = () => {
    setShowLogin(true);
  };

  return (
    <>
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        onLogin={handleLoginSuccess}
        onSkip={handleSkipLogin}
      />

      {view === 'landing' && (
        <LandingPage 
          onSamplePassport={handleSamplePassportClick} 
          onViewPassport={handleViewPassportClick} 
        />
      )}
      {view === 'registry' && (
        <BatteryRegistry 
          onSelectBattery={handleSelectBattery} 
          onBack={() => setView('landing')}
        />
      )}
      {view === 'dashboard' && (
        <Dashboard 
          onBack={handleBack} 
          isDemo={isDemoMode}
          isLoggedIn={isAuthenticated}
          onLoginRequest={handleLoginRequest}
        />
      )}
    </>
  );
}

export default App;