import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, CheckCircle, Loader2 } from 'lucide-react';

const DataEntryScreen = ({ mode, service, onBack, onSubmit }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start p-6 font-sans text-slate-900 pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-xl border border-slate-100"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Selection</span>
        </button>

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            {mode} / {service}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Complete your profile</h2>
          <p className="text-slate-500">Provide your details to initiate the {service} service request.</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
              <input type="text" placeholder="Jane" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <input type="email" placeholder="jane@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>

          {/* Document Capture Area */}
          <div className="mt-10 p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50 flex flex-col items-center text-center">
            <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 text-blue-600">
              <Camera size={32} />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Verify Identity</h4>
            <p className="text-slate-500 text-sm mb-6 max-w-xs">Upload a clear photo of your driver's license or government ID.</p>
            
            <button className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
              Select Document
            </button>

            {/* OCR Status Mockup */}
            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-xs font-medium uppercase tracking-wider">Awaiting capture...</span>
            </div>
          </div>

          <button 
            onClick={onSubmit}
            className="w-full mt-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all"
          >
            Submit and Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DataEntryScreen;
