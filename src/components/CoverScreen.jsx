// src/components/CoverScreen.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// Import tài nguyên (Giả sử bạn đã có file bg1.mp4 và avatar.jpg)
import bgVideo from "../assets/bg1.mp4";
import avatar from "../assets/avatar.jpg";

const CoverScreen = () => {
  return (
    <section
      style={{
        height: "100vh", // Chiếm trọn 1 màn hình
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
        zIndex: 10, // Quan trọng: Nằm đè lên lớp background 2
      }}
    >
      {/* 1. Background Video (Lớp rèm) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.6)", // Làm tối video đi 40% để chữ dễ đọc
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 2. Nội dung chính */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ textAlign: "center", zIndex: 2 }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.3)",
            overflow: "hidden",
            margin: "0 auto 20px",
            boxShadow: "0 0 30px rgba(0, 123, 255, 0.5)", // Hiệu ứng Glow xanh
          }}
        >
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: "120%", height: "120%", objectFit: "cover" }}
          />
        </div>

        {/* Tên */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "10px",
            textShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
        >
          Nguyễn Tùng
        </h1>

        {/* Bài thơ (Typewriter) */}
        <div
          style={{
            fontSize: "1.2rem",
            fontFamily: "Courier New",
            opacity: 0.8,
            minHeight: "50px", // Giữ chỗ để không bị nhảy layout
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Tôi tìm em trong bóng đêm",
                "Ngỡ như em đã tồn tại",
                "Chào mừng đến với thế giới của tôi.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
      </motion.div>

      {/* 3. Mũi tên chỉ xuống (Gợi ý cuộn) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "30px",
          fontSize: "2rem",
          opacity: 0.7,
        }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default CoverScreen;
