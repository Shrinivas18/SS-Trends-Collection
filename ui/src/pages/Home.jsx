import React from "react";
import video from "../assets/home/video.mp4";

import one from "../assets/home/Georgette-Saree-Green.jpeg";
import two from "../assets/home/saree.jpeg";
import three from "../assets/home/saree-black.jpeg";
import four from "../assets/home/sareeGroup.jpg";
import five from "../assets/home/suit-black.jpeg";
import six from "../assets/home/suitBrown.jpg";
import seven from "../assets/home/Georgette-Saree-Green.jpeg";
import eight from "../assets/home/saree-lilac.jpeg";
import nine from "../assets/home/bouse-red2.jpeg";
import ten from "../assets/home/saree-offwhite.jpeg";
import eleven from "../assets/home/suitGreen.jpg";
import twelve from "../assets/home/sareeGroup1.jpg";
import thirteen from "../assets/home/sareeLightBlue.jpg";
import fourteen from "../assets/home/suit-black1.jpeg";
import fifteen from "../assets/home/saree-violet.jpeg";
import sixteen from "../assets/home/suit-violet1.jpeg";
import seventeen from "../assets/home/saree-lightred.jpeg";
import eighteen from "../assets/home/Suit-Purple.jpeg";
import nineteen from "../assets/home/blouse-offwhite.jpeg";
import twenty from "../assets/home/saree-offwhite2.jpeg";
import twentyOne from "../assets/home/sareeRed1.jpg";
import twentyTwo from "../assets/home/saree-green.jpeg";
import twentyThree from "../assets/home/suitBlack3.jpg";
import twentyFour from "../assets/home/saree-red2.jpeg";
import twentyFive from "../assets/home/blouse-red.jpeg";
import twentySix from "../assets/home/saree-lilac1.jpeg";
import twentySeven from "../assets/home/suit-violet.jpeg";
import twentyEight from "../assets/home/saree-maron.jpeg";
import twentyNine from "../assets/home/suitPink.jpg";
import thirty from "../assets/home/blouse-red1.jpeg";
import thirtyOne from "../assets/home/saree-silk.jpeg";
import thirtyTwo from "../assets/home/saree-offwhite3.jpeg";
import thirtyThree from "../assets/home/suit-royal-blue.jpeg";
import thirtyFour from "../assets/home/saree-pink.jpeg";
import thirtyFive from "../assets/home/saree-red.jpeg";
import { ELEGANCE, EXPLORE } from "../utilities/constants";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirty,
  thirtyOne,
  thirtyTwo,
  thirtyThree,
  thirtyFour,
  thirtyFive,
];

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full md:hidden"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black md:block hidden"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{ELEGANCE}</h1>
          <p className="text-lg md:text-xl mb-6">{EXPLORE}</p>
          {/* <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all">
            Shop Now
          </button> */}
        </div>
      </div>

      <section className="py-10 px-4 md:px-10 lg:px-20 w-full bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Our Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-48 sm:h-60 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
