const Button = ({
  label,
  iconUrl,
  backgroundcolor,
  bordercolor,
  textcolor,
  fullWidth,

}) => {
  // console.log(iconUrl);
  return (
    <>
      {/* <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border 
          ${
            bordercolor ? bordercolor : ""
          } font-montserrat text-lg leading-none ${
          backgroundcolor ? backgroundcolor : "bg-coral-red"
        }  rounded-full ${textcolor ? textcolor : "text-white"} ${
          fullWidth && "w-full"
        }`}
      >
        {label}
        {iconUrl ? (
          <img
            src={iconUrl}
            alt="arrow right icon"
            className="ml-2 rounded-full h-5 w-5"
          />
        ) : (
          ""
        )}
      </button> */}
      <button
        className={` gap-2 px-7 py-4 border  relative flex h-[50px]  items-center justify-center overflow-hidden  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:bg-gray-800 hover:before:h-56 hover:before:w-56   ${
          bordercolor ? bordercolor : ""
        } font-montserrat text-lg leading-none ${
          backgroundcolor ? backgroundcolor : "bg-coral-red"
        }  rounded-full ${
          textcolor ? textcolor + " hover:text-white" : "text-white"
        } ${fullWidth && "w-full"}`}
      >
        <span class="relative z-10 flex">
          {label}
          {iconUrl ? (
            <img
              src={iconUrl}
              alt="arrow right icon"
              className="ml-2 rounded-full h-5 w-5"
            />
          ) : (
            ""
          )}
        </span>
      </button>
    </>
  );
};

export default Button;
