import React from "react";
import wishesData from "../../assets/wishes.json";
import Heading from "../layout/Heading";
import CardGrid from "../CardGrid";

function Wishlist() {
  return (
    <>
    <div className="pages-container">
      <Heading size="2" content={"Ønskeliste"} />
      <p>Ved spørsmål vedrørende gaver, ta kontakt med Gro Borgen Kirkemo eller Tone Andersen Kråbøl på Messenger.</p>
      <CardGrid items={wishesData.items} />
    </div>  
    </>
  );
}

export default Wishlist;
