import React from 'react';
import { motion } from 'framer-motion';
import { Shield, User, Briefcase, Users } from 'lucide-react';

const OnboardingModeCard = ({ icon: Icon, title, description, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02, backgroundColor: '#f1f5f9' }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="flex flex-col items-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all text-center w-full max-w-sm"
  >
    <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-6">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.button>
);

const LandingScreen = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-900">
      {/* Header Area */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield className="text-blue-600" size={40} />
          <span className="text-2xl font-black tracking-tight text-slate-900">PushingSecurity</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          One secure front door.
        </h1>
        <p className="text-slate-600 text-lg max-w-xl mx-auto">
          Welcome to Pushing Capital. Please select your onboarding mode to begin.
        </p>
      </motion.div>

      {/* Mode Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        <OnboardingModeCard 
          icon={User}
          title="Customer"
          description="I need transport, inspection, parts, or finance services."
          onClick={() => onSelectMode('customer')}
        />
        <OnboardingModeCard 
          icon={Users}
          title="Worker"
          description="I want to join the network as a field worker, carrier, or vendor."
          onClick={() => onSelectMode('worker')}
        />
        <OnboardingModeCard 
          icon={Briefcase}
          title="Operator"
          description="I am an internal operator or an authorized channel partner."
          onClick={() => onSelectMode('operator')}
        />
      </div>

      {/* Footer / Security Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-col items-center gap-4 text-slate-500 text-sm"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-200/50 rounded-full border border-slate-200">
          <Shield size={16} className="text-blue-500" />
          <span>Encrypted Data Entry & OCR Pipeline Active</span>
        </div>
        <p>© 2026 Pushing Capital. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
};

export default LandingScreen;
