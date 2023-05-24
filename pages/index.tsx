import { motion } from "framer-motion";
import { useState } from "react";
import Cube from "../components/cube";

import { client } from "../contentful.js";

export async function getStaticProps({ preview = false }) {
  const response = await client.getEntries();
  return {
    props: {
      entries: response.items,
    },
  };
}

const IndexPage = ({ entries }) => {
  const [color, setColor] = useState("#0D8E77");
  return (
    <div className="relative flex flex-col justify-center w-screen">
      <div className="flex gap-5 mt-10 ml-10">
        <button
          className="block w-10 h-4 p-2 text-sm rounded-2xl bg-[#e2c2f6]"
          onClick={() => setColor("#e6cbf7")}
        ></button>
        <button
          className="block h-4 w-10 p-2 text-sm rounded-2xl bg-[#8fbecf]"
          onClick={() => setColor("#a0c7d5")}
        ></button>
        <button
          className="block h-4 w-10 p-2 text-sm rounded-2xl bg-[#0fa186]"
          onClick={() => setColor("#0D8E77")}
        ></button>
      </div>
      <motion.div
        className="w-fit h-fit absolute top-32 left-32"
        initial={{ opacity: 0, x: "150vh", rotate: 180 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1.3 }}
      >
        <Cube
          size={200}
          color={color}
          opacity={0.6}
          dragConstraints={{ left: 15, right: 15, top: 15, bottom: 15 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          dropShadow={true}
        ></Cube>
      </motion.div>
      {entries.map((item, index) => {
        return <p key={index}>{item.fields.postId}</p>;
      })}
    </div>
  );
};

export default IndexPage;
