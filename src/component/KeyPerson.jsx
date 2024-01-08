import React from "react";
import OwnerCard from "./KeyData";

const KeyPerson = () => {
  const owner1 = {
    name: "Darshit Patel",
    image: "url_to_owner1_image.jpg",
    bio: "Founder & CEO",
  };

  const owner2 = {
    name: "Page Under Development Comming Soon",
    image: "url_to_owner2_image.jpg",
    bio: "Co-founder & CTO",
  };

  return (
    <div>
      <OwnerCard owner1={owner1} owner2={owner2} />
    </div>
  );
};

export default KeyPerson;
