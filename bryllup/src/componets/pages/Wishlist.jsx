import React from "react";
import wishesData from "../../assets/wishes.json";
import Heading from "../layout/Heading";
import CardGrid from "../CardGrid";

function Wishlist() {
  return (
    <>
      <Heading size="2" content={"Ønskeliste"} />
      <p>Vi ønsker oss også pengegaver</p>
      <CardGrid items={wishesData.items} />
    </>
  );
}

export default Wishlist;
