import React from "react";
import wishesData from "../../assets/wishes.json";
import Heading from "../layout/Heading";
import CardGrid from "../CardGrid";

function Wishlist() {
  return (
    <>
    <div className="pages-container">
      <Heading size="2" content={"Ønskeliste"} />
      <CardGrid items={wishesData.items} />
    </div>  
    </>
  );
}

export default Wishlist;
