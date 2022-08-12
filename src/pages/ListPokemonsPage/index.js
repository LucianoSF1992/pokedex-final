import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { GlobalContext } from "../../hooks/useGlobalState";
import { ListPokemonsContainer } from "./style";

export default function ListPokemonsPage() {
  const { pokemons, handlePokedex } = useContext(GlobalContext);

  return (
    <ListPokemonsContainer>
      <Header
        button={
          <div>
            <button>
              <NavLink to={"/pokedex"}>Ver pokedex</NavLink>
            </button>
          </div>
        }
      />
      {pokemons &&
        pokemons.map((item) => (
          <Card
            fun={handlePokedex}
            pokemons={item}
            actionOne={"Capturar"}
            actionSec={"Ver detalhes"}
          />
        ))}
    </ListPokemonsContainer>
  );
}
