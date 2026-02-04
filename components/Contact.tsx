import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="mb-8 text-slate-400 max-w-sm">
              Feel free to reach out for IT Support opportunities. I check my emails daily and am available for interviews.
            </p>
            
            <div className="space-y-4">
              <a href="tel:+919971356768" className="flex items-center hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                  <Phone size={18} />
                </div>
                <span>+91-9971356768</span>
              </a>
              
              <a href="mailto:kunalhlc10@gmail.com" className="flex items-center hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                  <Mail size={18} />
                </div>
                <span>kunalhlc10@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Professional Networks</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all duration-300">
                <Github size={24} />
              </a>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-800">
              <p className="text-sm text-slate-400">
                Located in <span className="text-white font-medium">New Delhi, India</span>
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Open to relocation within NCR
              </p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kunal Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;