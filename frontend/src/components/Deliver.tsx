import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { faAngleUp, faCartShopping, faCreditCard, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DeliverComponent() {
    return (
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleUp} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <FontAwesomeIcon icon={faLocationCrosshairs} /> Deliver to
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleUp} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <FontAwesomeIcon icon={faCartShopping} /> Cart
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleUp} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <FontAwesomeIcon icon={faCreditCard} /> Payment
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
    )
}

export default DeliverComponent;