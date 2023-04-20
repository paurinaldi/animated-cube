import { motion } from "framer-motion";
import Cube from "../components/cube";

const IndexPage = () => {
  return (
    <div className="relative h-screen w-screen">
      <motion.div
        className="w-fit h-fit absolute bottom-32 left-0"
        //had to put position values here instead of on the cube
        initial={{ opacity: 0, x: "80vh", rotate: -180 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 1.3 }}
      >
        <Cube
          size={307}
          color={{
            lightFace: "#0D8E77",
            mediumFace: "#0F7065",
            darkFace: "#125354",
          }}
          opacity={0.1}
          rotation="rotate-180"
          dragConstraints={{ left: 15, right: 15, top: 15, bottom: 15 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          shadow="drop-shadow-2xl"
        ></Cube>
      </motion.div>
    </div>
  );
};

export default IndexPage;
