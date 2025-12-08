import React, { useEffect } from "react";
import video1 from '../Assets/loader.mp4'

export default function Loader({ onFinish }) {

  useEffect(() => {
    // When browser finishes loading EVERYTHING (images, fonts, etc)
    window.addEventListener("load", () => {
      onFinish();
    });

    // Safety timeout fallback (2.5s)
    const timeout = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
}
