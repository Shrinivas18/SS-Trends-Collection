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
import { HOME_SECTION } from "../features/mode/lightMode";
import { useTheme } from "../context/useTheme";
import { DARK_MODE_HOME_SECTION } from "../features/mode/darkMode";
import SareeCarousel from "../components/SareeCarousel";

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
  const isDarkMode = useTheme();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full overflow-hidden">
        <div className="mt-10">
          <SareeCarousel />
        </div>
      </div>

      <section
        className={
          isDarkMode.darkMode
            ? DARK_MODE_HOME_SECTION.SECTION
            : HOME_SECTION.SECTION
        }
      >
        <h2
          className={
            isDarkMode.darkMode
              ? DARK_MODE_HOME_SECTION.HEADER
              : HOME_SECTION.HEADER
          }
        >
          Our Collection
        </h2>

        <div
          className={
            isDarkMode.darkMode
              ? DARK_MODE_HOME_SECTION.IMAGE_GRID
              : HOME_SECTION.IMAGE_GRID
          }
        >
          {images.map((img, index) => (
            <div key={index} className={HOME_SECTION.IMAGE_DIV}>
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className={HOME_SECTION.IMAGE}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
