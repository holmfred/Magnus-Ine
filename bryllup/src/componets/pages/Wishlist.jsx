import React from "react";
import wishesData from '../../assets/wishes.json';
import Heading from "../layout/Heading";

function Wishlist() {
    return (
        <div>
            <Heading />
            <ul>
                {wishesData.wishes.map((wish, index) => (
                    <li key={index}>
                        <h3>{wish.wishName}</h3>
                        
                        <a href={wish.url}>View Wish</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Wishlist;