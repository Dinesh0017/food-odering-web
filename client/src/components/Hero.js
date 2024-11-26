import React from "react";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";

function Hero() {
  return (
    <section className="flex pt-10 gap-8">
      <div className="m-4">
        <h1 className="text-6xl font-bold text-left pt-6 justify-between leading-16 tracking-wide ">
          Everyting <br />
          is better <br /> with a <span className="text-red-600">Pizza</span>
        </h1>
        <p className="pt-6 text-1xl items-left text-gray-600">
          Pizza is the missing piece tht makes every day complete, a simple yet
          declicious joy in life.
        </p>
        <div className="pt-4 flex gap-7">
          <button className="bg-red-600 font-bold text-white rounded-full px-4 py-1 flex gap-2 items-center">
            ORDER NOW
            <CiCircleChevRight size={20} />
          </button>
          <button className="font-bold flex items-center gap-2">
            Learn more
            <CiCircleChevRight size={25} />
          </button>
        </div>
      </div>
      <div>
        <Image src="/pizza.png" alt="pizza" width={600} height={500} />
      </div>
    </section>
  );
}

export default Hero;
