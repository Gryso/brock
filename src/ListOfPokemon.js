import {Box, Button, makeStyles,} from "@material-ui/core";
import React, {useEffect, useReducer} from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import Progress from "./Progress";

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

function reducer(state, action) {
  if (action.type === "add") {
    return {
      pokemon: state.pokemon.concat(action.data.results),
      nextUrl: action.data.next
    };
  } else {
    return state;
  }
}

function ListOfPokemon() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    pokemon: [],
    nextUrl: "https://pokeapi.co/api/v2/pokemon?limit=40"
  });

  function fetchPokemon() {
    axios.get(state.nextUrl)
      .then(response => {
        dispatch({
          type: "add",
          data: response.data
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
      fetchPokemon();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  if (!state.pokemon.length) {
    return <Progress />;
  }

  return (
    <Box className={classes.root}>
      {state.pokemon.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} url={pokemon.url} />)}
      {state.nextUrl ?
        <Button className={classes.loadMore} onClick={fetchPokemon}>
          Load more
        </Button>
        : null}
    </Box>
  );
}

export default ListOfPokemon;
