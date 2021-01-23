import {Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography} from "@material-ui/core";
import React, {useState} from "react";
import axios from "axios";
import PokemonDetails from "./PokemonDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Error from "./Error";

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

  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  function fetchDetails() {
    axios.get(url)
      .then(response => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      });
  }

  return (
    <Accordion
      className={classes.root}
      TransitionProps={{
        mountOnEnter: true
      }}
      onChange={() => {
        if (!details) {
          fetchDetails();
        }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.name}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {error ? <Error /> : <PokemonDetails details={details} />}
      </AccordionDetails>
    </Accordion>
  );
}

export default React.memo(Pokemon);
