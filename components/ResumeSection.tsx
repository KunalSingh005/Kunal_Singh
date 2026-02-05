import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-blue-600 dark:bg-blue-700 relative overflow-hidden">
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
            {/* Download Button Fix: Link to your PDF file in public folder */}
            <a
              href="/Kunal Singh.pdf" 
              download="Kunal Singh.pdf"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors flex items-center justify-center no-underline"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </a>

            {/* View Full Profile: Link to LinkedIn or About Section */}
            <a
              href="www.linkedin.com/in/kunalsingh005" // Isse LinkedIn link ya portfolio ke top par bhej sakte ho
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-800/50 text-white border border-blue-400/30 hover:bg-blue-800 transition-colors flex items-center justify-center font-medium no-underline"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Full Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
