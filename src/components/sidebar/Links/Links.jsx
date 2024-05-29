import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2, // Increase stagger duration for a more noticeable effect
      delayChildren: 0.5, // Delay the start of child animations
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1, // Reverse stagger direction when closing
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }, // Optional physics-based animation
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }, // Optional physics-based animation
    },
  },
};

const Links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }} // Optional hover effect
          whileTap={{ scale: 0.9 }} // Optional tap effect
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
