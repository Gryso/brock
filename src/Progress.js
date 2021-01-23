import {Box, CircularProgress, makeStyles,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    component: props => props.component || "li",
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
