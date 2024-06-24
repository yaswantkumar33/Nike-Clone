import Footerparentiv from "../Components/footerparentiv";
import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";
import Socialicon from "./../Components/Socialicon";
import { footerLinks } from "./../constants/index";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col text-white">
        <div className="flex flex-col items-start">
          <a href="">
            <img src={footerLogo} alt="" width={150} height={150} />
          </a>
          <p className="text-base sm:max-w-sm mt-6 leading-7 font-montserrat">
            Get shoes ready for the new term at your nearest Nike Store.Find
            Your prefect Size In Store.Get Rewards
          </p>
          <div className=" flex gap-8 mt-8">
            <Socialicon icon={facebook} />
            <Socialicon icon={twitter} />
            <Socialicon icon={instagram} />
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item) => {
            console.log(item);
            return <Footerparentiv val={item} />;
          })}
        </div>
      </div>
      <div className="text-white flex justify-between mt-20">
        <div className="flex gap-2">
          <img src={copyrightSign} alt="" />
          <p className="text-base font-montserrat">
            AstroYash. All rights reserved
          </p>
        </div>
        <div className="text-base font-montserrat">Tems&Condition</div>
      </div>
    </footer>
  );
};

export default Footer;
