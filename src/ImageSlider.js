import React, { useEffect, useState } from "react";
import data from "./constants";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const HadlePreviousClick = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex > 0 ? previousIndex - 1 : data.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex < data.length - 1 ? previousIndex + 1 : 0
    );
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentIndex]);

  return (
    <div className="flex justify-center mt-10">
      <button className="font-bold p-10 m-10 h-10" onClick={HadlePreviousClick}>
        Pervious
      </button>
      {data.map((url, index) => (
        <img
          src={url}
          alt={`Image ${index}`}
          key={index}
          className={`w-[400px] ${index !== currentIndex ? "hidden" : ""}`}
        />
      ))}
      <button className="font-bold p-10 m-10 h-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
