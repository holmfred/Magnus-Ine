import Heading from "../layout/Heading";
import Card from "react-bootstrap/Card"

function Guests () {
    return (
        <>
        <div className='pages-container'>
            <Heading size="2" content={"Gjesteliste"} />
            <container className="guest-container">
                    <Card className="guest-card">
                        <Card.Title>Bord 1</Card.Title>
                        <Card.Text className="guest-name">
                            Tiril
                            Tobias
                            Harald
                            Jørgen
                            Marina
                            Hajir
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 2</Card.Title>
                        <Card.Text>
                            Live
                            Reidun
                            Svein
                            Grethe
                            Odd-Rune
                            Nina
                            Kim
                            Siv
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 3</Card.Title>
                        <Card.Text>
                            Magne
                            Borgny
                            Bente
                            Morten
                            Terje
                            Tone
                            Gredel
                            Alf
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 4</Card.Title>
                        <Card.Text>
                            Vilde
                            Eivind
                            Kamilla
                            Brage
                            Marita
                            Aurora
                            Gabriel
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 5</Card.Title>
                        <Card.Text>
                            Erik
                            Kirsten
                            Ann-Synnøve
                            Tina
                            Stian
                            Andrine
                            Tobias
                            Ariana
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 6</Card.Title>
                        <Card.Text>
                            Roger
                            Linn
                            Emil
                            Heidi
                            Espen
                            Ragnhild
                            Gunnar
                            Taran
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 7</Card.Title>
                        <Card.Text>
                            Hanna
                            Fredrik
                            Eira
                            Frøya
                            Karoline
                            Thomas
                            Ida
                            Patrick
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 8</Card.Title>
                        <Card.Text>
                            Roar
                            Ingunn
                            Madelen
                            Stian
                            Kristoffer
                            Aurora
                            Martin
                            Kristin
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 9</Card.Title>
                        <Card.Text>
                            Alrik
                            Martin
                            Maria S
                            Maria R
                            Edward
                            Eline
                            Aleksander
                        </Card.Text>
                    </Card>
                    <Card className="guest-card">
                        <Card.Title>Bord 10</Card.Title>
                        <Card.Text>
                            Vegard
                            Catharina
                            Emil
                            Stine
                            Henning
                            Tilde
                            Fredrik
                            Håkon
                        </Card.Text>
                    </Card>
            </container>
        </div>
        </>
    )
}

export default Guests