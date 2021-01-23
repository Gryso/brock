import {Divider, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import React from "react";
import Progress from "./Progress";

const useStyles = makeStyles((theme) => ({
  details: {
    width: "100%",
  },
  name: {
    textTransform: "capitalize",
    marginTop: theme.spacing(2)
  },
}));

function Detail({children, description}) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText>
        <b>{description}: </b>
        {children}
      </ListItemText>
    </ListItem>
  );
}

function PokemonDetails({details}) {
  const classes = useStyles();

  if (!details) {
    return <Progress />;
  }

  return (
    <div className={classes.details}>
      <Divider />
      <List>
        <Detail description="Height">{details.height}</Detail>
        <Detail description="Weight">{details.weight}</Detail>
        <Detail description="Order">{details.order}</Detail>
        <Detail description="Types">{details.types.map((value) => value.type.name).join(", ")}</Detail>
        <Detail description="Abilities">{details.abilities.map((value) => value.ability.name).join(", ")}</Detail>
      </List>
    </div>
  );
}

export default PokemonDetails;
