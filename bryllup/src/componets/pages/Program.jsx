import Accordion from 'react-bootstrap/Accordion';
import Heading from "../layout/Heading";

function Program () {
    return ( 
        <>
        <div className='pages-container'>
            <Heading size="2" content={"Program"} />
            <p>Dette er en foreløpig tidsplan, som kommer til å endre seg og bli mer detaljer frem mot dagen.</p>
            <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>12:30 Oppøte i kirka med Magnus og forlovere</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>13:00 Vielse i Ullensaker Kirke (Ine ankommer med bil)</Accordion.Header>
              <Accordion.Body>
                  Vielsen vil finne sted i Ullensaker Kirke. Alle er hjertlig velkommen til vielsen.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>14:00 Vielse er slutt</Accordion.Header>
              <Accordion.Body>
                  <li>Budeparet reiser mot Nes kirkeruiner med forlovere </li>
                  <li>Gjestene drar mot lokalet</li>    
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>15:00 Gjestene ankommer Bøndernes hus</Accordion.Header>
              <Accordion.Body>
                  Blir servert velkomstdrikk
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>15:30/16:00 Brudeparet ankommer Bøndernes</Accordion.Header>
              <Accordion.Body>
                Vi tar fellesbilder med familie/bryllupsfølge
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>16:30 - Gjestene setter seg til bords</Accordion.Header>
              <Accordion.Body>
                Tobias holder velkomsttale med diverse info
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header> 16:30-17:00 - Middagsservering</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header> 17:00-18:00 - Middag og taler</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>18:00 - The Blondies (tre sanger)</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header> 20:30 - Kråbøls husband</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header> 21:15 - Kaker</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header> 22:30 - Highwater starter festen</Accordion.Header>
          </Accordion.Item>
        </Accordion>
        </div>
    </>
    )
}

export default Program