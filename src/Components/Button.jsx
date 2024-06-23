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
      <button
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
      </button>
    </>
  );
};

export default Button;
