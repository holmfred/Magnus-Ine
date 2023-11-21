import React from "react";
import wishesData from '../../assets/wishes.json';
import Heading from "../layout/Heading";

function Wishlist() {
    return (
        <div>
            <Heading size="2" content={"Ønskeliste"}/>
            <ul>
                {wishesData.wishes.map((wish, index) => (
                    <li key={index}>
                        <h3>{wish.wishName}</h3>
                        {wish.url &&
                        <a href={wish.url}>View Wish</a>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Wishlist;