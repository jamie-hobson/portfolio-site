import { motion } from 'framer-motion';

const NorthernLights = () => {
  return (
    <div className="fixed w-screen h-screen overflow-hidden -z-50">
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 255, 255, 0.3), rgba(0, 0, 255, 0.1), rgba(255, 0, 255, 0.3))',
          filter: 'blur(50px)',
          opacity: 0.5,
        }}
        animate={{ y: [0, -200, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 255, 255, 0.3), rgba(0, 0, 255, 0.1), rgba(255, 0, 255, 0.3))',
          filter: 'blur(50px)',
          opacity: 0.5,
        }}
        animate={{ y: [0, -150, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 2 }}
      />
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 255, 255, 0.3), rgba(0, 0, 255, 0.1), rgba(255, 0, 255, 0.3))',
          filter: 'blur(50px)',
          opacity: 0.5,
        }}
        animate={{ y: [0, -180, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: 4 }}
      />
    </div>
  );
};

export default NorthernLights;