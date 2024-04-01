import React from 'react';
import CardGrid from "../CardGrid";
import Heading from "../layout/Heading";

function Info() {
    const items = [
        {
            title: "Parkering ved festlokalet",
            text: "Utenfor lokalet er det en stor parkeringsplass, med mulighet for å sette igjen bilen over natten og hente den dagen etter."
        },
        {
            title: "Vielsen i kirka",
            text: "Vielsen vil finne sted i Ullensaker Kirke. Alle er hjertlig velkommen til vielsen." 
        },
        {            
            title: "Kleskode",
            text: "Kleskoden til bryllupet er formelt. Eksempler på dette er bunad, dress og kjole, eller skjorte og dressbukse. Vi har ikke valgt noe spesielt tema, men gjerne kom i sommerlige farger og mønstre. Det er opp til hver enkelt. Helst ikke hvitt ;)"
        },
        {
            title: "Middagen",
            text: "Middagen vil være grillbuffet grillet og servert av Flyt catering (tidligere Elvebredden catering). Vennligst informer oss om eventuelle allergier eller andre tilpasninger slik at vi kan videreformidle dette til Flyt i tide. Til middagen vil det serveres vin (hvit og rød), øl og en rekke alkoholfrie alternativer."
        },
        {
            title: "Taler og innslag",
            text: "Alle er hjertelig velkommen til å holde tale i løpet av kvelden. Det kommer også musikkinnslag utover kvelden."
        },
        {
            title: "Alkoholservering",
            text: "Det vil serveres alkohol til både middag og dessert. Det vil også serveres noen enheter i baren senere på kvelden. Ønsker man noe mer utover dette er man velkommen til å ta med selv. Se punktet om `medbragt alkohol`."
        },
        {
            title: "Medbragt alkohol",
            text: "Lokalet vi leier har ikke skjenkebevilling, så all alkohol som serveres er kjøpt inn av oss, og det vil ikke være noe alkoholsalg i baren. Dersom man ønsker noe mer eller `sterkere` enn det som allerede serveres må man gjerne ta med dette selv. Vi har ikke mulighet til å garantere at drikken som tas med kan oppbevares kaldt i lokalet da det er begrenset med kjøleskapsplass. Om dere har ytterligere spørsmål rundt dette er det bare å spørre en av oss." 
        }
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