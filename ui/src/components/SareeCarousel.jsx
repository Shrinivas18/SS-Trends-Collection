import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import silkSaree from "../assets/silkSaree.jpg";

const items = [
  {
    id: 1,
    title: "Elegant Silk Saree",
    image: silkSaree,
  },
  {
    id: 2,
    title: "Designer Ladies Suit",
    image: "https://placehold.co/1200x800?text=Ladies+Suit",
  },
  {
    id: 3,
    title: "Classic Banarasi Saree",
    image: "https://placehold.co/1200x800?text=Banarasi+Saree",
  },
  {
    id: 4,
    title: "Modern Georgette Saree",
    image: "https://placehold.co/1200x800?text=Georgette+Saree",
  },
  {
    id: 5,
    title: "Festive Embroidered Suit",
    image: "https://placehold.co/1200x800?text=Embroidered+Suit",
  },
  {
    id: 6,
    title: "Traditional Kanjivaram Saree",
    image: "https://placehold.co/1200x800?text=Kanjivaram+Saree",
  },
];

export default function SareeCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full relative">
              {/* Responsive Image Container */}
              <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-xl text-center font-semibold text-gray-900">
                {item.title}
              </div>

              {/* CTA Button */}
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-700 transition">
                Shop Now
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
