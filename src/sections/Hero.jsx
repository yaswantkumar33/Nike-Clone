import { useState } from "react";

import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "./../Components/Button";
import ShoeCard from "./../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [delayval, setdelayval] = useState(1);

  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>

          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold animate-fade-right animate-once animate-ease-linear z-10">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm animate-fade-right animate-duration-[2000ms] animate-ease-linear">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button label="Shop now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 animate-fade-right animate-duration-[1500ms] animate-delay-[2000ms] animate-ease-linear">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center animate-fade-left animate-once animate-ease-linear">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={610}
            height={502}
            className="object-contain relative z-10 animate-fade-left animate-once animate-delay-[525ms] animate-ease-linear"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((image, index) => {
              if (delayval - 3 < index) {
                setdelayval((prv) => {
                  return prv + 2;
                });
              }
              return (
                <div key={index}>
                  <ShoeCard
                    index={index}
                    imgURL={image}
                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                    bigShoeImg={bigShoeImg}
                    delay={delayval}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className="w-full max-xl:w-2/5 bg-black">
        <p>understaning thew resposne in tailwind</p>
      </div> */}
    </>
  );
};

export default Hero;
