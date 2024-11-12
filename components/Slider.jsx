"use client";
import React, { useState } from "react";
import Image from "next/image";
import Herbal from "../assets/cocoblock.webp";
import coco from "../assets/Herbalpowder.webp"

const images = [
  { imgSrc: Herbal, alt: "Herbal Slide" },
  { imgSrc: coco, alt: "Herbal Slide" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center space-y-6 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold">
           Our Products
          </h1>
      </div>
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image.imgSrc}
              alt={image.alt}
              layout="responsive"
              width={700}
              height={400}
              priority
              className="object-cover w-full h-64"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
