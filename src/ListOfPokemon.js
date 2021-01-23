import {Box, Button, makeStyles,} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import Progress from "./Progress";
import Error from "./Error";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  loadMore: {
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: theme.spacing(4),
  }
}));

function ListOfPokemon() {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=40");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  function fetchPokemon() {
    axios.get(nextUrl)
      .then(response => {
        setPokemon(pokemon.concat(response.data.results));
        setNextUrl(response.data.next);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      });
  }

  useEffect(() => {
      fetchPokemon();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  if (error && !pokemon.length) {
    return <Error error={error} />;
  }

  if (!pokemon.length) {
    return <Progress />;
  }

  return (
    <Box className={classes.root}>
      {pokemon.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} url={pokemon.url} />)}
      {nextUrl && !error ?
        <Button className={classes.loadMore} disabled={isFetching} onClick={() => {
          setIsFetching(true);
          fetchPokemon();
        }}>
          {isFetching ? "Loading..." : "Load more"}
        </Button>
        : null}
      {error ?
        <Error />
        : null}
    </Box>
  );
}

export default ListOfPokemon;
