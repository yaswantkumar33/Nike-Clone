const footerparentiv = ({ val }) => {
  console.log(val);
  return (
    <div className="text-white">
      <h1 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
        {val.title}
      </h1>
      <div>
        <ul>
          {val.links.map((item, index) => {
            return (
              <>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  <a href={item.links}>{item.name}</a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default footerparentiv;
