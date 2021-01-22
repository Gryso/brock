import {Box, Button, ListItem, ListItemSecondaryAction, ListItemText, makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  name: {
    textTransform: "capitalize",
    fontWeight: "bold"
  },
}));

function Pokemon({name, url}) {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemText>
        <Box className={classes.name}>
          {name}
        </Box>
      </ListItemText>
      <ListItemSecondaryAction>
        <Button
          size="small"
          onClick={() => {
            console.log('%c name:', 'color: rgb(49, 193, 27)', name);
            console.log('%c url:', 'color: rgb(49, 193, 27)', url);
          }}>
          Show details
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default React.memo(Pokemon);
