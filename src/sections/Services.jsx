import Servicecard from "../Components/Servicecard";
import { services as service } from "./../constants/index";

const Services = () => {
  console.log(service);
  return (
    <>
      <section className="flex justify-center max-container flex-wrap gap-9">
        {service.map((item, index) => (
          <Servicecard key={index} Item={item} />
        ))}
      </section>
    </>
  );
};

export default Services;
