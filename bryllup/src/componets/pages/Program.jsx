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
            <Accordion.Header>13:00-14:00 Vielse i Ullensaker Kirke</Accordion.Header>
              <Accordion.Body>
                  Vielsen vil finne sted i Ullensaker Kirke. Alle er hjertlig velkommen til vielsen.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>14:00-14:30 Fotografering med bryllupsfølget ved kirka</Accordion.Header>
              <Accordion.Body>
                Vi har med oss fotograf oss med det samme vielsen er ferdig. 
                Vi ønsker å ta bilder med de to familiene ved kirka i tillegg til hele bryllupsfølget utenfor kirkedøra. 
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
                Det blir servert bobler og lett mat på lokalet. Gjestene ønskes velkommen av vår kjære toastmaster Tobias Uran Brakstad.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header> ~17:00 - Vi setter oss til bords</Accordion.Header>
              <Accordion.Body>
                Etter glassene er fylt og et par taler serveres middagen.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header> ~19:00 - Opptredener</Accordion.Header>
            <Accordion.Body>
              Vi får live konsert av flere band med venner og familie fra begge sider.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header> ~19:40 - Kaker, taler og mingling</Accordion.Header>
              <Accordion.Body>
                Kakene blir servert. 
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header> ~21:00 - "Første" dans</Accordion.Header>
              <Accordion.Body>
                Brudeparet danser sin første dans som mann og kone.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header> ~21:30 - Bryllupsfesten tar seg opp.</Accordion.Header>
              <Accordion.Body>
                Bryllupsfesten fortsetter med musikk og dans. 
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    </>
    )
}

export default Program