import Image from 'next/image';
import Link from "next/link";
import HerbalTea from "../assets/Herbalpowder.webp"; 
import HerbalPowder from "../assets/herbaltea.webp"
import Herbalvine from "../assets/herbalvine.webp"

const products = [
  {
    name: "Herbal Tea",
    imgSrc: HerbalTea, 
  },
  {
    name: "Herbal Powder",
    imgSrc: HerbalPowder,
  },
  {
    name: "Herbal Vine",
    imgSrc: Herbalvine,
  },
];

export default function HorticultureProduct() {
  return (
    <section className="product-display">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Horticuluture Products</h2>
        <p className="text-gray-500 mt-2">
          Enhance your gardening with eco-friendly, water-retaining, and pest-resistant products. Grow green!
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        {products.map((product, index) => (
          <div key={index} className="product-item text-center">
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover rounded-3xl"
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/horticulture">
          <button className="flexen rounded-full border border-customGreen px-6 py-2 font-medium hover:bg-customBlue hover:text-white">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
