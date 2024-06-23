import Nav from "./Components/Nav";
import {
  Footer,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Customerreview,
  Hero,
} from "./sections/index";

// import Aos from "aos";
// import "aos/dist/aos";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <Customerreview />
    </section>
    <section className="padding-x sm:py-32 py-15 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
