"use client";

import { Oval } from "react-loader-spinner";

const Loader = ({ height, width, text, containerStyles }) => {
  return (
    <div className={containerStyles || ""}>
      <Oval
        height={height}
        width={width}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Loader;
