import Image from 'next/image';
import productImage from '../assets/webbanner.png';
import agriImage from '../assets/agri.webp';
import IconSection from '@/components/Icon';
import ProductDisplay from '@/components/ProductDisplay';
import HorticultureProduct from '@/components/HorticultureProduct';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-0">
      
      {/* Enlarged Image and Tagline Section */}
      <div className="container mx-auto flex flex-col md:flex-row w-full max-w-screen-xl px-0 mt-[50px] mb-[50px]">
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <Image
          src={productImage}
          alt="Agriculture and Organic Products"
          width={1500}
          height={400}
          className="rounded-3xl object-cover"
        />
      </div>

        <div className="flex-[1.2] flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Where Tradition <br />
            Meets Innovation <br />
            in Every Product.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
            A brief description or catchy phrase.
          </p>
        </div>
      </div>

      {/* Icon Section */}
      <div className="w-full flex justify-center items-center mt-[50px] mb-[50px]">
        <IconSection />
      </div>

      {/* Text and Image Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 mt-[50px] mb-[50px]">
        <div className="md:w-1/2 space-y-4 md:text-left text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Who We Are
          </h1>
          <p className="text-gray-700">
            Maxol (Private) Limited is a Sri Lankan pioneer in eco-friendly, sustainable manufacturing and export of high-quality, non-traditional agro and herbal products. Established in 2023, we set out to redefine the export landscape by introducing innovative, value-added products that reflect Sri Lanka’s rich heritage and commitment to the environment.
          </p>
          <Link href="/about-us">
  <button className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0">
    About Us
  </button>
</Link>

        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={agriImage}
            alt="Agriculture and Organic Products"
            width={400}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Product Display Sections */}
      <div className="w-full flex justify-center items-center mt-[50px] mb-[50px]">
        <ProductDisplay />
      </div>
      
    </div>
  );
}