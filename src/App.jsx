// src/App.jsx
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ClickToEnter from "./components/ClickToEnter";
import CoverScreen from "./components/CoverScreen";
import ProfileCard from "./components/ProfileCard";

import musicFile from "./assets/music.mp3";
import bgStatic from "./assets/bg2.jpg";

function App() {
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái nhạc (Đang chơi hay dừng)
  const [volume, setVolume] = useState(0.5); // Âm lượng mặc định 50%
  const audioRef = useRef(null);

  // 1. Xử lý khi click vào màn hình chờ
  const handleEnter = () => {
    setEntered(true);
    setIsPlaying(true); // Đánh dấu là đang nghe nhạc
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch((e) => console.log("Audio Error:", e));
    }
  };

  // 2. Hàm Bật/Tắt nhạc (Toggle)
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 3. Hàm chỉnh âm lượng
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicFile} loop />

      <AnimatePresence>
        {!entered && <ClickToEnter onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <div className="main-wrapper">
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${bgStatic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
              filter: "brightness(0.4)",
            }}
          ></div>

          <CoverScreen />

          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              zIndex: 1,
              padding: "20px",
            }}
          >
            {/* TRUYỀN CÁC CHỨC NĂNG ĐIỀU KHIỂN NHẠC XUỐNG DƯỚI */}
            <ProfileCard
              isPlaying={isPlaying}
              toggleMusic={toggleMusic}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
