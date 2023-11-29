import Accordion from 'react-bootstrap/Accordion';
import Heading from "../layout/Heading";

function Program () {
    return ( 
        <>
        <Heading size="2" content={"Program"} />
        <p>Dette er en foreløpig tidsplan, som kommer til å endre seg og bli mer detaljer frem mot dagen.</p>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>13:00 Vielse i Ullensaker Kirke</Accordion.Header>
        <Accordion.Body>
            Vielsen vil foregå finne sted i Ullensaker Kirke. Alle er hjertlig velkommen i kirka til vielsen. Presten er (kanskje) Brage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>14:00-14:30 Fotografier med bryllupsfølget ved kirka</Accordion.Header>
        <Accordion.Body>
          Vi har med oss fotograf oss med det samme vielsen er ferdig. 
          Vi ønsker å ta bilder med de to familiene ved kirka i tillegg til dronefoto med hele bryllupsfølget utenfor kirkedøra. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> 15:00-15:40 - Brudeparet er på fotografering</Accordion.Header>
        <Accordion.Body>
          Brudeparet er på fotografering alene. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> 15:30 - Gjestene velkommes på lokalet</Accordion.Header>
        <Accordion.Body>
          Det blir servert bobler og snitter på lokalet. Ønsket velkommen av vår kjære toastmaster Tobias Uran Brakstad.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> 17:00 - Bryllupsmiddag</Accordion.Header>
        <Accordion.Body>
          Bryllupmiddagen blir servert i lokalet med en grillbuffet fra 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
    )
}

export default Program