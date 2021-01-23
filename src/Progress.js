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

function Progress(props) {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
}

export default Progress;
