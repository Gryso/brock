import {Accordion, AccordionDetails, AccordionSummary, ListItem, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import axios from "axios";
import PokemonDetails from "./PokemonDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold"
  },
}));

function Pokemon({name, url}) {
  const classes = useStyles();

  const [details, setDetails] = React.useState(null);

  function fetchDetails() {
    axios.get(url)
      .then(response => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <ListItem dense>
      <Accordion
        className={classes.root}
        TransitionProps={{
          mountOnEnter: true
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          IconButtonProps={{
            onClick: () => {
              if (!details) {
                fetchDetails();
              }
            }
          }}
        >
          <Typography className={classes.name}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {<PokemonDetails details={details} />}
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}

export default React.memo(Pokemon);
