import { motion } from "framer-motion";

interface CubeProps {
  size?: number;
  color?: { lightFace: string; mediumFace: string; darkFace: string };
  opacity?: string | number;
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
  shadow,
}: CubeProps) => {
  return (
    <motion.div
      className={`${shadow ?? "drop-shadow-2xl"} w-fit h-fit`}
      drag
      dragConstraints={
        dragConstraints ?? { left: 15, right: 15, top: 15, bottom: 15 }
      }
      dragElastic={dragElastic ?? 0.5}
      dragTransition={
        dragTransition ?? { bounceStiffness: 500, bounceDamping: 10 }
      }
    >
      <svg
        className={`opacity-[${opacity}] ${rotation}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 107 107"
      >
        <path
          fill={color.lightFace ?? "#0D8E77"}
          d="M53.557 54.645l-33.716-6.834 21.206-27.088 33.716 6.833-21.206 27.09z"
        ></path>
        <path
          fill={color.darkFace ?? "#125354"}
          d="M65.354 86.628L53.558 54.644l21.206-27.09L86.56 59.54 65.354 86.628z"
        ></path>
        <path
          fill={color.mediumFace ?? "#0F7065"}
          d="M65.353 86.627l-33.717-6.834L19.84 47.81l33.717 6.834 11.796 31.984z"
        ></path>
      </svg>
    </motion.div>
  );
};

export default Cube;
