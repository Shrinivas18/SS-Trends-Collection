import React from "react";
import { motion } from "framer-motion";
import saree from "../assets/saree-purple.png";
import whitesuit from "../assets/white-suit.png";
import redsuit from "../assets/red-suit.png";
import {
  STARTER_CLOTH,
  STARTER_IMAGE,
  SUBTITILE_VARIANT,
  TEXT_VARIANT,
  WELCOME_TO_SS_TRENDS_COLLECTION,
  YOUR_FASHION_YOUR_STYLE,
} from "../color-mode/lightmode";

function Starter() {
  return (
    <div className="starter-container relative min-h-screen w-full bg-black bg-opacity-90 z-50 overflow-hidden">
      {/* === Overlapping Image Row === */}
      <div className="relative w-full max-w-[100vw] h-[60vh] mx-auto">
        {/* White Suit (Left) */}
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={STARTER_IMAGE}
          viewBox="0 0 600 600"
          className={`${STARTER_CLOTH} absolute left-[5%] top-1/2 -translate-y-1/2 z-10`}
        >
          <motion.image
            href={whitesuit}
            width="600"
            height="600"
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          />
        </motion.svg>

        {/* Saree (Center) */}
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={STARTER_IMAGE}
          viewBox="0 0 600 600"
          className={`${STARTER_CLOTH} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
        >
          <motion.image
            href={saree}
            width="600"
            height="600"
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
        </motion.svg>

        {/* Red Suit (Right) */}
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={STARTER_IMAGE}
          viewBox="0 0 600 600"
          className={`${STARTER_CLOTH} absolute right-[5%] top-1/2 -translate-y-1/2 z-10`}
        >
          <motion.image
            href={redsuit}
            width="600"
            height="600"
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.svg>
      </div>

      {/* === Text Section === */}
      <div className="text-center px-4 pb-10 relative z-30">
        <motion.h1
          className={WELCOME_TO_SS_TRENDS_COLLECTION}
          variants={TEXT_VARIANT}
          initial="hidden"
          animate="visible"
        >
          Welcome to SS Trends Collection
        </motion.h1>

        <motion.p
          className={YOUR_FASHION_YOUR_STYLE}
          variants={SUBTITILE_VARIANT}
          initial="hidden"
          animate="visible"
        >
          Your fashion, your style
        </motion.p>
      </div>
    </div>
  );
}

export default Starter;
