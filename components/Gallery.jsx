import { useState } from "react";
import Image from "next/image";
import product from "@/assets/cocobag.webp";

const images = Array(9).fill(product); // Creates an array with 9 identical entries of `product`

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => {
    setVisibleImages(images.length);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-auto object-cover transition-transform transform hover:scale-105 rounded-3xl"
              priority={index < 6} // Load initial images with higher priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Product Image {index + 1}
            </div>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="flex justify-center mt-4">
       
        </div>
      )}
    </div>
  );
};

export default Gallery;
