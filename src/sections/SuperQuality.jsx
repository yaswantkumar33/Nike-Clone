import Button from "../Components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <>
      <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl font-palanquin lg:max-w-xl font-bold">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="lg:max-w-lg mt-6 info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="mt-11 ">
            <Button label="View Details" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe8}
            alt=""
            width={570}
            height={572}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
