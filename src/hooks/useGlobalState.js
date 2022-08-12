import React, { useEffect, useState } from "react";
import axios from "axios";
import UseRequestData from "./useRequestData";

export const GlobalContext = React.createContext();

export function UseGlobalState({ children }) {
  const pokemonsList = UseRequestData([], "");

  //console.log({ pokemonsList });

  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const handlePokedex = (item) => {
    setPokedex((oldValue) => [...oldValue, item]);
    alert("pokemon adcionado à pokedex");
  };
  const removePokedex = (item) => {
    const remove = pokedex.filter((element) => element.id !== item.id);

    setPokedex(remove);
  };

  // console.log({ pokemons });

  useEffect(() => {
    const newList = [];

    pokemonsList &&
      pokemonsList.forEach((element) => {
        axios
          .get(element.url)
          .then((resposta) => {
            newList.push(resposta.data);
            if (newList.length === pokemonsList.length) {
              setPokemons(newList);
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      });
  }, [pokemonsList]);

  return (
    <GlobalContext.Provider
      value={{ pokemons, pokedex, handlePokedex, removePokedex }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
