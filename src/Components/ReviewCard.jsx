import { star } from "../assets/icons";

const ReviewCard = ({ imgurl, customername, rating, feeddback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgurl}
        alt=""
        className="w-[120px] rounded-full h-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feeddback}</p>
      <div className="mt-3 flex justify-center items-baseline gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className=" mt-1 font-palanquin text-3xl text-center font-bold">
        {customername}
      </h3>
    </div>
  );
};

export default ReviewCard;
