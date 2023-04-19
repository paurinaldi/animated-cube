import { motion } from "framer-motion";

interface CubeProps {
  size?: number;
  color?: { lightFace: string; mediumFace: string; darkFace: string };
  opacity?: string;
  rotation?: string;
  dragConstraints?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  dragElastic?: number;
  dragTransition?: {
    bounceStiffness: number;
    bounceDamping: number;
  };
  position?: string;
  // top?: number;
  // left?: number;
  // right?: number;
  // bottom?: number;
  shadow?: string;
}

const Cube = ({
  size,
  color,
  opacity,
  rotation,
  dragConstraints,
  dragElastic,
  dragTransition,
  position,
  shadow,
}: CubeProps) => {
  return (
    <motion.div
      className={`${position} ${shadow} w-fit h-fit`}
      drag
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragTransition={dragTransition}
    >
      <svg
        className={`${opacity} ${rotation}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 107 107"
      >
        <path
          fill={color.lightFace}
          d="M53.557 54.645l-33.716-6.834 21.206-27.088 33.716 6.833-21.206 27.09z"
        ></path>
        <path
          fill={color.darkFace}
          d="M65.354 86.628L53.558 54.644l21.206-27.09L86.56 59.54 65.354 86.628z"
        ></path>
        <path
          fill={color.mediumFace}
          d="M65.353 86.627l-33.717-6.834L19.84 47.81l33.717 6.834 11.796 31.984z"
        ></path>
      </svg>
    </motion.div>
  );
};

export default Cube;
