import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
  const images = [
    "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg",
    "https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg",
    "https://images.pexels.com/photos/70336/children-boy-girl-young-70336.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleForm = ()=>{
    navigate("/form"); 
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Half - Image with Text and Button */}
      <div className="h-[50vh] w-full relative">
        <img
          src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg"
          alt="Top Half"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-bold drop-shadow-xl max-w-2xl">
            Together, we can make a difference.
          </h1>

          <button className="mt-6 bg-amber-400 text-white text-lg sm:text-xl px-6 py-3 rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300"
          onClick={handleForm}
          >
            Open Form
          </button>
        </div>
      </div>

      {/* Auto Slider with Left-Aligned Text */}
      <div className="relative w-full h-[400px]">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Text Overlay on Slider */}
        <div className="absolute inset-0 flex items-center pl-12 bg-black/30">
          <h4 className="text-white text-2xl sm:text-3xl font-semibold max-w-xl drop-shadow-lg">
            Spreading kindness through action, not words.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
