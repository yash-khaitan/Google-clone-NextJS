import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={` h-10 rounded-full cursor-pointer transition duration-200 transform hover:scale-[115%] ${className}`}
      src={url}
      alt="Profile pic"
    />
  );
};

export default Avatar;
