import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-blue-600 dark:bg-blue-700 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Support Your Team?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            I am available for immediate joining and eager to bring my technical troubleshooting skills to your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </button>
            <button
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-800/50 text-white border border-blue-400/30 hover:bg-blue-800 transition-colors flex items-center justify-center font-medium"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Full Profile
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;