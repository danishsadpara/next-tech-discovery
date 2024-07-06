import React from "react";
import Avatar from "../../utils/Avatar";
import Tag from "../../utils/Tag";

const page = () => {
  return (
    <div className="">
      <Avatar
        source="/europass.png"
        altText="europass logo"
        width={90}
        height={40}
      />
      <div className=" flex justify-center align-middle space-x-4">
        <Avatar
          source="/self.jpg"
          altText="self avtar"
          width={30}
          height={30}
        />
        <Tag name="Muhammad Murtaza Danish" />
      </div>
    </div>
  );
};

export default page;
