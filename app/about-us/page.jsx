import React from 'react';
import Image from 'next/image';
import MissionImage from '../../assets/missionimage2.jpg';
import vissionimage from '../../assets/vissionimage1.jpg';
import mainimage from '../../assets/mainimage.png';
import cocopeatlogo from '../../assets/Maxnature logo without bg.png';
import brandimage from '../../assets/Brand.webp';

const Aboutus = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* About Section */}
      <div className="flex flex-col items-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
  <div className="w-full flex justify-center">
    <Image
      src={mainimage}
      alt="Our Mission"
      width={1000}
   
      className="mainimage-image  "
    />
  </div>
  <div className="w-full text-center flex flex-col items-center px-4">
  
    <p className="text-base md:text-lg text-gray-700">
      Founded in 2023, Maxol (Private) Limited is dedicated to promoting the export of Sri Lanka's abundant, non-traditional resources, with a focus on delivering exceptional value through our products. Located in the heart of Sri Lanka’s coconut triangle, our factory in Dankotuwa produces high-quality, eco-friendly, and biodegradable agricultural products that showcase Sri Lanka's natural wealth.

      Our flagship brand, MAXNATURE, encompasses two primary product lines: MAXNATURE Cocopeat and MAXNATURE Herbal Products. MAXNATURE Cocopeat, crafted entirely from Sri Lankan coconut coir dust, offers a sustainable, disease-free, and highly efficient horticultural medium prized for its irrigation benefits and competitive pricing. This product serves as a premium choice for horticulturists and agricultural professionals worldwide.

      Our MAXNATURE Herbal Products are inspired by the ancient wisdom of Ayurvedic Ola manuscripts, formulated by qualified Ayurvedic physicians, and crafted to support wellness naturally. This line includes herbal teas, powders, tonics, and personal care items—all designed to provide proven health benefits without side effects. At Maxol, we are proud to bring the essence of Sri Lanka’s natural and traditional resources to a global market, empowering wellness and sustainability through innovation.
    </p>
  </div>
</div>



<section className="flex flex-col md:flex-row justify-center align-items: center text-center gap-8 py-10 mt-200">
<div className="p-8 flex text-center justify-center">
  <div className="w-full max-w-md">
  <div className="flex items-center justify-center">
  <Image
    src={cocopeatlogo}
    alt="cocopeatlogo"
    width={100}
    className="brandimage-image"
  />
</div>
 <h3 className="text-2xl font-bold mb-2">Cocopeat / Coir Products</h3>
    <p className="text-base md:text-lg text-black mb-5">
      MAXNATURE Cocopeat products bring the benefits of Sri Lanka’s premium coconut coir to horticulturists, gardeners, and agricultural professionals worldwide. Made from 100% natural, sustainably sourced coconut coir dust, MAXNATURE Cocopeat provides a versatile, eco-friendly growing medium with excellent water retention, aeration, and disease-free properties, ensuring optimal plant growth. Whether for large-scale agricultural use or home gardening, our cocopeat products offer a sustainable, biodegradable solution that nurtures plants while conserving resources.
    </p>
    <p className="text-base md:text-lg text-black mb-5">
      Choose MAXNATURE Cocopeat for a healthier, more productive, and environmentally friendly way to grow.
    </p>
    <div className="flex justify-center gap-4">
      <a href="http://localhost:3000/cocopeat">
        <button className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0">
          Cocopeat
        </button>
      </a>
    </div>
  </div>
</div>


  <div className="p-8 flex-1 text-center">
    
  <div className="flex items-center justify-center">
  <Image
    src={cocopeatlogo}
    alt="cocopeatlogo"
    width={100}
    className="brandimage-image"
  />
</div>
    <h3 className="text-2xl font-bold mb-2">Medicinal Herbal Products </h3>
    <p className="text-base md:text-lg text-black mb-5">
    For over two thousand years, the health and wellness practices of Sri Lanka have been deeply rooted in Ayurveda, literally meaning "the science of life." This ancient system of natural healing is centred on the powerful medicinal properties of plants and herbs growing naturally in their native habitats. MAXNATURE Herbal Products proudly continues this tradition, offering a range of herbal teas, powders, tonics, and personal care items formulated by qualified Ayurvedic physicians. Each product is crafted to support holistic wellness, providing natural remedies that enhance vitality, immunity, and overall well-being.
</p>
<p className="text-base md:text-lg text-black mb-5">
Drawing from Ayurvedic wisdom, our products are designed to meet modern wellness needs while honouring age-old principles. With carefully selected, sustainably sourced ingredients, MAXNATURE Herbal Products bring the time-tested benefits of Sri Lankan Ayurvedic practices into every cup, scoop, and bottle. Experience the purity, potency, and healing power of Sri Lanka’s natural heritage with MAXNATURE —where wellness is…..
  </p>
    <div className="flex justify-center gap-4">
    <div className="flex justify-center gap-4">
  <a href="http://localhost:3000/horticulture">
  <button className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0">
  Horticulture
    </button>
  </a>
</div>

    </div>
  </div>
</section>


     {/* Mission Statement */}
<section className="vissionmission-box rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left mb-7  py-5   md:space-y-0 gap-5">
  <Image
    src={MissionImage}
    alt="Our Mission"
    width={384}
    height={384}
    className="vissionmission-image rounded-3xl shadow-lg bg-white border border-gray-300 order-1 md:order-2"
  />
  <div className="flex-1 bg-customDarkBlue text-white rounded-3xl py-5 px-7 h-90 md:h-96 flex items-center order-2 md:order-1 ">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-yellow-300">Our Mission</h2>
      <p className="text-base md:text-lg text-white">
      To produce and export high-quality, non-traditional horticultural and herbal products while expanding into global markets with innovative, value-added offerings that highlight the richness and diversity of Sri Lanka’s natural resources.      </p>
    </div>
  </div>
</section>


      {/* Vision Statement */}
      <section className="vissionmission-box rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left  py-5 gap-5">
        <Image
          src={vissionimage}
          alt="Our Vision"
          width={384}
          height={384}
          className="vissionmission-image rounded-3xl shadow-lg bg-white border border-gray-300"
        />
        <div className="flex-1 bg-customDarkBlue text-white rounded-3xl py-5 px-7 h-90 md:h-96 flex items-center ">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-300">Our Vision</h2>
            <p className="text-base md:text-lg">
            To become a leading foreign currency earner by producing a diverse range of value-added, natural, and eco-friendly products for export, contributing to the global market while showcasing the unique offerings of Sri Lanka.            </p>
          </div>
        </div>
      </section>

        {/* brand image */}
<section className="brandimage-box rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left mb-7  py-5   md:space-y-0 gap-5 space-y-30">
  <Image
    src={brandimage}
    alt="Our Mission"
    width={384}
    height={384}
    className="brandimage-image rounded-3xl shadow-lg border order-1 md:order-2"
  />
  <div className="flex-1 text-black rounded-3xl py-5 px-7 h-90 md:h-96 flex items-center order-2 md:order-1 ">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-customGreen">OUR STATMENT</h2>
      <p className="text-base md:text-lg text-black">
      At MAXNATURE, we believe in the extraordinary potential of nature to enhance our lives. Our brand mission is to offer sustainable and ecofriendly solutions that contribute to healthier planet and well-being for our customers.
      </p>
    </div>
  </div>
</section>



    </div>
  );
};

export default Aboutus;