import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Users, Network, MessageSquare, Ticket } from 'lucide-react';
import { SkillItem } from '../types';

const skills: SkillItem[] = [
  {
    title: "Desktop Support",
    description: "Support for Windows 10/11 & macOS. MS Office suite configuration, email setup, and standard system optimization.",
    icon: Monitor
  },
  {
    title: "Hardware Troubleshooting",
    description: "Diagnosis and resolution of laptop/desktop hardware issues. Printer connectivity and peripheral maintenance.",
    icon: Cpu
  },
  {
    title: "User Management",
    description: "Creating and managing user accounts, password resets, and access permissions (Active Directory basics).",
    icon: Users
  },
  {
    title: "Basic Networking",
    description: "Troubleshooting LAN/Wi-Fi connectivity, DNS, DHCP, and TCP/IP configuration issues.",
    icon: Network
  },
  {
    title: "Ticket Handling",
    description: "Logging, tracking, and resolving support tickets. Escalating complex issues to senior teams appropriately.",
    icon: Ticket
  },
  {
    title: "User Communication",
    description: "Providing clear, non-technical explanations to end-users and ensuring professional service delivery.",
    icon: MessageSquare
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-2">
            Core Competencies
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            Technical Expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <skill.icon size={24} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {skill.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;