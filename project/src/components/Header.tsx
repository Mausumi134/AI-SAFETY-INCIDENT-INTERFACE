import React from 'react';
import { ShieldAlert } from 'lucide-react'; 

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 py-8 px-4 sm:px-6 lg:px-8 shadow-lg relative overflow-hidden">
      
      {/* Background glow thing - looks cool */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,0,0.1),transparent)] pointer-events-none"></div>

      {/* Main content container */}
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center">
          
          {/* Icon section */}
          <div className="bg-green-500/10 p-3 rounded-lg mr-4">
            <ShieldAlert className="h-8 w-8 text-green-400" />
          </div>

          {/* Title and tagline */}
          <div>
            <h1 className="text-3xl font-bold text-green-400 tracking-tight">
              AI Safety Incident Dashboard
            </h1>

            {/* Updated tagline - sounds more action-focused */}
            <p className="text-white-500/80 mt-2 text-base">
              Stay ahead of risks by monitoring and reporting AI safety incidents in real-time.
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};


export default Header;
