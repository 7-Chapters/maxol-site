"use client";
import React from 'react';
import Image from 'next/image';
import cocopeatlogo from '@/assets/Herbal.png';
import Gallery from '@/components/Gallery';

const Horticulture = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:px-8 mb-[50px]">
      <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
        {/* Image Section - Positioned on the Left for Desktop */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={cocopeatlogo}
            alt="Agriculture and Organic Products"
            width={500}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Text Section - Aligned to Top and Left */}
        <div className="md:w-1/2 flex flex-col justify-start text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Horticulture
          </h1>
          <p className="text-gray-700">
            In Sri Lanka, in the distant past, information about herbs was inscribed on palm leaves with a pointed metal stylus which contained information on the curative properties of herbs, their food, medicinal and cosmetic values. We take pride in sourcing the finest herbs to create our herbal products. From soothing teas to revitalizing herbal remedies, each product is carefully crafted to harness the healing properties of nature. Our herbal offerings are designed to support your health, promote relaxation, and enhance your overall wellness. With MAXNATURE, you can indulge in the natural goodness that your body deserves.
          </p>
        </div>
      </div>

      {/* Herbal Products and Characteristics */}
      <div className="pt-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          MAXNATURE Herbal Products
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Characteristics of Herbal Products */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              Characteristics of Herbal Products:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>100% natural and no chemicals will be used</li>
              <li>
                Hygienically prepared under maximum care with the supervision of
                a Senior Ayurvedic Practitioner
              </li>
              <li>No side effects as no toxic materials are used</li>
              <li>Biodegradable</li>
              <li>Packed in filter bags for convenient use</li>
              <li>Available for disorders such as:</li>
            </ul>

            {/* Disorders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-gray-700">
              {[
                'Gastritis',
                'Depurative',
                'Diabetic',
                'Bronchitis',
                'Arthritis',
                'High blood pressure',
                'Influenza',
                'Impotency',
                'Insomnia',
                'Acute food poison',
                'Rheumatic pains',
                'Grow thin',
                'Hepatitis',
                'Stomachache',
              ].map((item, index) => (
                <div className="flex items-start" key={index}>
                  <span className="mr-2">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Herbal Products List */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              Product Range:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {[
                'Herbal Tea in filter bags',
                'Herbal tea in 50–100 gm packets',
                'Herbal fills',
                'Herbal wines and tonics',
                'Individual herbal drinks',
                'Garlic in bee honey',
                'Herbal balms and pastes',
                'Herbal toothbrush',
                'Herbal mouth wash',
                'Medicinal plant parts for research purposes',
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Packaging and Certifications */}
      <div className="mt-12">
        <div className="space-y-4">
          {/* MAXNATURE Packaging */}
          <p className="text-lg flex flex-wrap items-start md:items-center">
            <span className="font-semibold whitespace-nowrap">
              MAXNATURE Packaging:
            </span>
            &nbsp;<span className="text-gray-700">Complexion of packaging depends on buyer requirements.</span>
          </p>

          {/* Certifications */}
          <p className="text-lg flex flex-wrap items-start md:items-center">
            <span className="font-semibold whitespace-nowrap">
              Certifications:
            </span>
            &nbsp;<span className="text-gray-700">As requested by the buyer with the confirmed order.</span>
          </p>
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

export default Horticulture;
