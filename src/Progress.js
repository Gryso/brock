import {Box, CircularProgress, makeStyles,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6),
  },
}));

function Progress() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
}

export default Progress;
