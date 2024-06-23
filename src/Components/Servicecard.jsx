import { services } from "../constants";

const Servicecard = ({ Item }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red">
        <img src={Item.imgURL} alt="" />
      </div>
      <h3 className="MT-5 font-palanquin text-3xl leading-normal font-bold">
        {Item.label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">
        {Item.subtext}
      </p>
    </div>
  );
};

export default Servicecard;
