export const variants = {
  hidden: {
    opacity: 0,
    y: "-50",
    transition: {
      type: "tween",
      stiffness: "300",
      damping: "140",
    },
  },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      type: "tween",
      stiffness: "80",
    },
  },
};

export const slideIn = (direction) => ({
  hidden: {
    x: direction === "right" ? "100%" : "-100%",
  },
  show: {
    x: "0",
    transition: {
      type: "tween",
      delay: "0.2",
      duration: "0.5",
      ease: "easeOut",
    },
  },
});
