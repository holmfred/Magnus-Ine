import React from 'react';
import CardGrid from "../CardGrid";
import Heading from "../layout/Heading";

function Info() {
    const items = [
        {
            title: "Parkering ved lokalet",
            text: "Det er stor parkering ved lokalet. Det er mulig å la bilen stå over natten og hente den dagen etter."
        },
        {
            title: "Mat og Allergier",
            text: "Maten vil være buffet med flere valgmuligheter. Gi beskjed om allergier eller andre spesielle behov."
        },
        {
            title: "Vielsen i kirka",
            text: "Vielsen vil foregå finne sted i Ullensaker Kirke. Alle er hjertlig velkommen i kirka til vielsen." 
        },
        {            
                title: "Klesskode",
                text: "Kleskoden for bryllupet er formelt. Dress, blaser, skjorte og dressbukse, kjole (ikke hvit) Vi ber vennligst alle gjester om å følge kleskoden."
        },
        {
            title: "Bryllupsfesten og alkohol",
            text: "Det vil være alkoholservering på bryllupsfesten etter middag. Vi stiller med bar med øl, vin og et par utvalgte drinker med bekjente i som bartendere <3. Ønsker du noe annet, ta gjerne med selv det er lov å ta med medbrakt på lokalet."
        },
    ];


    console.log(items);

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