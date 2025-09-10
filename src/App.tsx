import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { LoginSignup } from './components/LoginSignup';
import { PersonaSelection } from './components/PersonaSelection';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasSelectedPersona, setHasSelectedPersona] = useState<boolean>(false);
  const [selectedPersona, setSelectedPersona] = useState<string>('gig-worker');
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'home' | 'menu'>('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setHasSelectedPersona(false);
    setSelectedPersona('gig-worker');
    setCurrentView('home');
  };

  const handlePersonaSelect = (persona: string) => {
    setSelectedPersona(persona);
  };

  const handlePersonaContinue = () => {
    setHasSelectedPersona(true);
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="dark">
        <LoginSignup onLogin={handleLogin} />
      </div>
    );
  }

  // Persona selection screen
  if (!hasSelectedPersona) {
    return (
      <div className="dark">
        <PersonaSelection 
          onPersonaSelect={handlePersonaSelect}
          selectedPersona={selectedPersona}
          onContinue={handlePersonaContinue}
        />
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      
      case 'dashboard':
        return <Dashboard persona={selectedPersona} />;
      
      case 'profile':
        return <Profile selectedPersona={selectedPersona} />;
      
      case 'menu':
        return <Menu selectedPersona={selectedPersona} onLogout={handleLogout} />;
      
      default:
        return null;
    }
  };

  // Main app
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto bg-card shadow-xl min-h-screen">
        <Header />
        
        <div className="p-4 pb-20">
          {renderContent()}
        </div>
        
        <Navigation 
          currentView={currentView}
          onViewChange={setCurrentView}
        />
      </div>
    </div>
  );
}