import React from "react";
import { motion } from "framer-motion";
import "./ProfileCard.css";

// Import thêm các icon mới
import {
  FaFacebook,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaSteam,
  FaCode,
  FaCheckCircle,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaBriefcase,
} from "react-icons/fa";
import avatarImg from "../assets/avatar.jpg";

const ProfileCard = ({
  isPlaying,
  toggleMusic,
  volume,
  handleVolumeChange,
}) => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="badges-container">
        <span className="badge">
          <FaCode /> Developer
        </span>
        <span className="badge">
          <FaCheckCircle style={{ color: "#00b0f4" }} /> Verified
        </span>
      </div>

      <h2 style={{ marginBottom: "10px" }}>Nguyễn Tùng</h2>
      <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
        I turn coffee into code.
        <br />
        Building dreams with React & Node.js.
      </p>

      {/* --- PHẦN SOCIAL (Đã thêm Steam) --- */}
      <div className="social-grid">
        <a
          href="https://www.facebook.com/nguyen.tung.397744"
          target="_blank"
          className="social-btn"
          style={{ color: "#1877F2" }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/tungtoxic"
          target="_blank"
          className="social-btn"
          style={{ color: "#fff" }}
        >
          <FaGithub />
        </a>
        <a href="#" className="social-btn" style={{ color: "#5865F2" }}>
          <FaDiscord />
        </a>
        <a
          href="https://steamcommunity.com/profiles/76561199086995134/"
          target="_blank"
          className="social-btn"
          style={{ color: "#1b2838" }}
        >
          <FaSteam />
        </a>
        <a
          href="https://tungtoxic.github.io/my-portfolio/"
          target="_blank"
          className="social-btn"
          style={{ color: "#00d26a" }} /* Màu xanh lá nổi bật */
          title="Xem Portfolio của tôi"
        >
          <FaBriefcase />
        </a>
      </div>

      <div className="discord-box">
        <div className="discord-avatar">
          <img src={avatarImg} alt="Discord Avatar" />
          <div className="status-dot"></div>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: "0.9rem" }}>Tùng Toxic</h4>
          <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.7 }}>
            Thinking about life...
          </p>
        </div>
      </div>
      <div className="music-player-container">
        {/* Nút Play/Pause */}
        <button onClick={toggleMusic} className="play-btn">
          {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: "2px" }} />}
        </button>
        <div className="volume-control">
          <FaVolumeUp className="volume-icon" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
