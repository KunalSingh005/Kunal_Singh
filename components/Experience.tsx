import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "IT Support / Technical Support",
    company: "Kimbal Technology",
    location: "Greater Noida",
    period: "Feb 2024 – Jun 2025",
    responsibilities: [
      "Provided Level 1 IT support for Windows desktops, laptops, printers, and office applications.",
      "Diagnosed and resolved hardware, software, login, and system performance issues.",
      "Assisted users with MS Office, email configuration, and standard system settings.",
      "Logged, tracked, and resolved support tickets following standard procedures.",
      "Escalated unresolved or recurring issues to senior support teams when required."
    ]
  },
  {
    id: 2,
    role: "IT Support Intern",
    company: "India Habitat Centre",
    location: "Delhi",
    period: "Nov 2022 – Nov 2023",
    responsibilities: [
      "Delivered on-site desktop support for Windows and macOS systems.",
      "Created and managed user accounts, passwords, and access permissions.",
      "Assisted in troubleshooting LAN, DNS, and DHCP-related connectivity issues.",
      "Performed basic hardware replacement, system setup, and routine maintenance tasks."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-2">
            Work History
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h3>
        </div>

        <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h4>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.period}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;