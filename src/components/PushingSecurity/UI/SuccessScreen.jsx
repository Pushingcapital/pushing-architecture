import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SuccessScreen = ({ service }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-900">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 text-center"
      >
        <div className="flex justify-center mb-8 text-emerald-500">
          <CheckCircle size={80} />
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">All set.</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Your <span className="font-bold text-slate-900">{service}</span> service request has been successfully created. A P worker has been assigned and will contact you shortly to execute the next move.
        </p>

        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mb-10 text-left">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service ID</div>
          <div className="text-sm font-mono text-slate-700">SR-2026-0408-X99</div>
        </div>

        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
          <span>Go to Client Portal</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessScreen;
