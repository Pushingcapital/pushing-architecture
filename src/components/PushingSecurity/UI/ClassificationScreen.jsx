import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Search, Settings, DollarSign, FileText, UserPlus, HardHat, Store, ArrowLeft } from 'lucide-react';

const ServiceCard = ({ icon: Icon, label, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center justify-center p-6 bg-white border-2 border-slate-100 rounded-xl shadow-sm transition-all text-center group"
  >
    <div className="p-3 bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 rounded-lg mb-4 transition-colors">
      <Icon size={24} />
    </div>
    <span className="font-semibold text-slate-700 group-hover:text-slate-900">{label}</span>
  </motion.button>
);

const ClassificationScreen = ({ mode, onSelectService, onBack }) => {
  const options = {
    customer: [
      { id: 'transport', label: 'Transport', icon: Truck },
      { id: 'inspection', label: 'Inspection', icon: Search },
      { id: 'parts', label: 'Parts Sales', icon: Settings },
      { id: 'finance', label: 'Finance', icon: DollarSign },
      { id: 'dmv', label: 'DMV / Compliance', icon: FileText },
    ],
    worker: [
      { id: 'field_worker', label: 'Field Worker', icon: UserPlus },
      { id: 'carrier', label: 'Carrier', icon: HardHat },
      { id: 'vendor', label: 'Service Vendor', icon: Store },
    ]
  };

  const currentOptions = options[mode] || [];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>

        <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
          What can we help you with?
        </h2>
        <p className="text-slate-600 text-lg mb-12">
          Select the specific {mode} service you are interested in.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentOptions.map((opt) => (
            <ServiceCard 
              key={opt.id}
              icon={opt.icon}
              label={opt.label}
              onClick={() => onSelectService(opt.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClassificationScreen;
