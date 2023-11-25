import Heading from "../layout/Heading"
import React from 'react';
import CardGrid from "../CardGrid";

function Info() {
    const cards = [
        {
            title: "Parkering ved lokalet",
            text: "Det er stor parkering ved lokalet. Det er mulig å la bilen stå over natten og hente den dagen etter."
        },
        {
            title: "Mat og Allergier",
            text: "Maten vil være buffet med flere valgmuligheter. Gi beskjed om allergier eller andre spesielle behov."
        },
        {
            title: "Transportation",
            text: "Shuttle buses will be provided from designated locations to the venue. Please check the schedule for pick-up and drop-off times."
        },
        {            
                title: "Klesskode",
                text: "Kleskoden for bryllupet er formell. Vi ber vennligst alle gjester om å følge kleskoden."
        }
    ];

    return (
        <>
            <Heading size="2" content={"Informasjon"} />
            <CardGrid cards={cards} />
        </>
    );
}

export default Info