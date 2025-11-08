import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import silkSaree from "../assets/silkSaree.jpg";

const items = [
  {
    id: 1,
    title: "Elegant Silk Saree",
    image: { silkSaree },
  },
  {
    id: 2,
    title: "Designer Ladies Suit",
    image: "https://placehold.co/600x400?text=Ladies+Suit",
  },
  {
    id: 3,
    title: "Classic Banarasi Saree",
    image: "https://placehold.co/600x400?text=Banarasi+Saree",
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

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-xl text-center font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

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
