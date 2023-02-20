export const navVariants = {
  hidden: {
    opacity: 0,
    y: "-50",
    transition: {
      type: "spring",
      stiffness: "300",
      damping: "140",
    },
  },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      stiffness: "80",
    },
  },
};

export const CTAVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "0",
    transition: {
      type: "tween",
      delay: "0.2",
      duration: "1",
      ease: 'easeOut',
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = {
  hidden: {
    y: "50",
    opacity: "0",
  },
  show: {
    y: "0",
    opacity: "1",
    transition: {
      type: 'spring',
      duration: "1.25",
      delay: "1.2",
    },
  },
};

export const textVariant2 = {
  hidden: {
    opacity: "0",
    y: "20",
  },
  show: {
    opacity: "1",
    y: "0",
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: "0",
  },
  show: {
    opacity: "1",
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const footerVariants = {
  hidden: {
    opacity: "0",
    y: "50",
    transition: {
      type: "spring",
      stiffness: "300",
      damping: "140",
    },
  },
  show: {
    opacity: "1",
    y: "0",
    transition: {
      type: "spring",
      stiffness: "80",
      delay: "0.5",
    },
  },
};
