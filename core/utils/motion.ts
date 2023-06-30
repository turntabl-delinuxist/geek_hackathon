export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


export const fadeIn = (delay: number, duration: number) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
