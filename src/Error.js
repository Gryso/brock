import {makeStyles, Paper, Typography,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
  })
);

function Error() {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography color="error">
        We are sorry, but we're having some technical difficulties. please try again later.
      </Typography>
    </Paper>
  );
}

export default Error;
