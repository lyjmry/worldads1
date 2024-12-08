import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  TvIcon,
  MegaphoneIcon,
  CommandLineIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Roles() {
  const roles = [
    {
      icon: UserGroupIcon,
      title: 'Users',
      description: 'Participate in the ecosystem by viewing ads and earning rewards.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: TvIcon,
      title: 'Screen Owners',
      description: 'Provide LED screens and earn revenue from advertising display.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: MegaphoneIcon,
      title: 'Advertisers',
      description: 'Create and display ads on the platform\'s global screen network.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: CommandLineIcon,
      title: 'Developers',
      description: 'Build mini apps and tools to enhance the platform ecosystem.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reviewers',
      description: 'Ensure content quality and compliance with platform standards.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Ecosystem Roles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400"
        >
          Multiple roles working together to create a thriving advertising ecosystem
        </motion.p>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/20 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl ${role.bgColor} flex items-center justify-center mb-4`}>
              <role.icon className={`w-6 h-6 ${role.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
            <p className="text-gray-400">{role.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
        >
          Join the Ecosystem
        </motion.button>
      </motion.div>
    </div>
  );
}
