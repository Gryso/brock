import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import {AppBar, makeStyles, Paper, Toolbar, Typography} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
  },
  main: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.header}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Brock
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Pokomenos
            </Typography>

          </Paper>
        </main>
    </ThemeProvider>
  );
}

export default App;
