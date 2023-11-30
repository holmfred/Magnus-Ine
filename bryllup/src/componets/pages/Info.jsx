import React from 'react';
import CardGrid from "../CardGrid";
import Heading from "../layout/Heading";

function Info() {
    const items = [
        {
            title: "Parkering ved lokalet",
            text: "Det er stor parkering på lokalet. Der er det mulig å la bilen stå over natten og hente den langt utpå dagen etter."
        },
        {
            title: "Mat og Allergier",
            text: "Maten vil være buffet med flere valgmuligheter. Gi beskjed om allergier eller andre spesielle behov."
        },
        {
            title: "Vielsen i kirka",
            text: "Vielsen vil finne sted i Ullensaker Kirke. Alle er hjertlig velkommen til vielsen." 
        },
        {            
            title: "Klesskode",
            text: "Kleskoden for bryllupet er formelt. Bunad, Dress, blaser/skjorte og dressbukse, kjole. Vi ber vennligst alle gjester om å følge kleskoden."
        },
        {
            title: "Bryllupsfesten og alkohol",
            text: "Det vil være alkoholservering på bryllupsfesten etter middag. Vi stiller med bar med øl, vin og et par utvalgte drinker med bekjente i som bartendere <3. Ønsker du noe annet, ta gjerne med litt ekstra selv da det er tillat å ha medbrakt på lokalet."
        },
    ];

    return (
        <>
        <div className='pages-container'>
            <Heading size="2" content={"Informasjon"} />
            <CardGrid items={items} />
        </div>
        </>
    );
}

export default Info