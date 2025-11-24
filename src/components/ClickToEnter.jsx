// src/components/ClickToEnter.jsx
import React from "react";
import { motion } from "framer-motion";

const ClickToEnter = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }} // Mờ dần trong 1.5s
      onClick={onEnter}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#000", // Màn hình đen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Luôn nằm trên cùng
        cursor: "pointer",
        color: "white",
      }}
    >
      <motion.h1
        animate={{ opacity: [1, 0.5, 1] }} // Hiệu ứng nhấp nháy
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          fontFamily: "Courier New",
          letterSpacing: "3px",
          fontSize: "1.5rem",
        }}
      >
        [ click to enter ]
      </motion.h1>
    </motion.div>
  );
};

export default ClickToEnter;
