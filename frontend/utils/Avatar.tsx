import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src={"/self.jpg"}
      alt="profile picture"
      className="object-cover rounded-full"
      width={30}
      height={30}
    />
  );
};

export default Avatar;
