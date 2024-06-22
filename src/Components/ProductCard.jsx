import { star } from "../assets/icons";
const ProductCard = ({ Product }) => {
  console.log(Product);
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={Product.imgURL} className="w-[280px] h-[280px]" alt="" />
      <div className="text-xl flex justify-start  mt-8 gap-2.5">
        <img src={star} alt="" width={24} height={24} />
        <p className="ml-3 font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl  leading-normal font-semibold font-palanquin ">
        {Product.name}
      </h3>
      <p className="text-coral-red font-montserrat text-2xl font-semibold mt-2 leading-normal">
        {Product.price}
      </p>
    </div>
  );
};

export default ProductCard;
