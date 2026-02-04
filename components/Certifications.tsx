import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { CertificationItem } from '../types';

const certs: CertificationItem[] = [
  { name: "Google IT Support Professional Certificate", provider: "Coursera" },
  { name: "Google Cybersecurity Professional Certificate", provider: "Coursera" }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </h3>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                IGNOU, Delhi
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                Expected 2028 (Pursuing)
              </p>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between"
                >
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="inline-block mt-2 px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">
                      {cert.provider}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;