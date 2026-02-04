import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3">
            Professional Profile
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Focused on Stability & User Satisfaction
          </h3>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am an entry-level IT Support and Helpdesk professional based in New Delhi, 
              with practical experience in desktop support, Windows troubleshooting, and 
              user account management.
            </p>
            <p className="mt-4">
              My background includes diagnosing hardware and software issues, managing 
              standard system setups, and resolving L1 support tickets. I prioritize 
              clear communication with end-users and follow defined IT procedures to ensure 
              systems run smoothly. I am currently pursuing my BCA and hold certifications 
              from Google in IT Support and Cybersecurity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;