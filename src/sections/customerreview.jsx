import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";
const customerreview = () => {
  console.log(reviews);
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-palanquin font-bold ">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here Genue Stories From our customsers
      </p>
      <div className="m-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgurl={review.imgURL}
            customername={review.customerName}
            rating={review.rating}
            feeddback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default customerreview;
