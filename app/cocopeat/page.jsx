"use client"
import React from 'react';
import Image from 'next/image';
import cocopeatlogo from '@/assets/coir.png';
import Gallery from '@/components/Gallery';

const Cocopeat = () => {
  return (
    <div className="container mx-auto px-5 py-10 md:px-12 mb-[50px]">
      <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
        
        {/* Image Section - Positioned on the Left for Desktop */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={cocopeatlogo}
            alt="Agriculture and Organic Products"
            width={500}
            height={500}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Text Section - Aligned to Top and Left */}
        <div className="md:w-1/2 flex flex-col justify-start text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Cocopeat
          </h1>
          <p className="text-gray-700">
            MAXNATURE premium cocopeat is derived from the husks of coconuts, transformed into an exceptional growing medium. It's not just environmentally friendly, it’s engineered to improve soil quality, retain moisture, and provide optimum aeration for plants. Whether you are a seasoned gardener or a beginner, MAXNATURE cocopeat empowers you to cultivate lush gardens and thriving plants while reducing your ecological footprint.
          </p>
        </div>
      </div>

      {/* Product Information Section */}
      <div className="pt-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          MAXNATURE Product Information
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Characteristics List */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              Characteristics of Cocopeat/Coir-Based Products:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Organic in nature and environmentally friendly</li>
              <li>100% biodegradable and made from renewable resources</li>
              <li>Long-lasting</li>
              <li>Excellent water-holding capacity</li>
              <li>Provides healthy aeration for plants</li>
              <li>Works well with soil and plant roots</li>
              <li>Compatible with any type of fertilizer, both liquid and powder</li>
              <li>Free of weeds</li>
              <li>Sieved to remove extraneous particles and dried as per buyer requirements</li>
            </ul>
          </div>

          {/* Product Range */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              Product Range:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Coco soft bale of 25 kg</li>
              <li>Coir dust bales: 4.5 kg / 5 kg / 10 kg</li>
              <li>Coir dust briquettes: 300 to 800 gms</li>
              <li>Coconut coir dust or husk chip grow bags – order specified</li>
              <li>Coconut husk chips in compressed form or loose form packed in PP bags</li>
              <li>Erosion-controlling coir fiber nettings</li>
              <li>Coir fiber rubber latex mixed flower basket liner</li>
            </ul>
          </div>
        </div>

        {/* Packaging and Certifications - Single Line for Each */}
<div className="mt-12">
  <div className="space-y-4">
    {/* MAXNATURE Packaging */}
    <p className="text-lg flex flex-wrap items-start md:items-center">
      <span className="font-semibold whitespace-nowrap">MAXNATURE Packaging:</span>
      &nbsp;<span className="text-gray-700">Complexion of packaging depends on buyer requirements.</span>
    </p>

    {/* Certifications */}
    <p className="text-lg flex flex-wrap items-start md:items-center">
      <span className="font-semibold whitespace-nowrap">Certifications:</span>
      &nbsp;<span className="text-gray-700">As requested by the buyer with the confirmed order.</span>
    </p>
  </div>
</div>
</div>


      {/* Gallery Section */}
      <div className="pt-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>
        <Gallery />
      </div>
    </div>
  );
};

export default Cocopeat;
